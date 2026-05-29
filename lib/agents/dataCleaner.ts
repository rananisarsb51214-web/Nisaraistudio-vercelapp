import { db } from '../../lib/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import _ from 'lodash';

export async function runDataCleanup() {
  console.log("Starting data cleanup...");
  const collectionsToClean = ['live_pages', 'users'];
  
  for (const colName of collectionsToClean) {
    const colRef = collection(db, colName);
    const snapshot = await getDocs(colRef);
    const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Detect duplicates (simple example: based on title)
    const grouped = _.groupBy(docs, 'title');
    
    for (const title in grouped) {
      if (grouped[title].length > 1) {
        console.log(`Found duplicates for ${title}:`, grouped[title].length);
        // Keep the first one, delete the rest
        const toDelete = grouped[title].slice(1);
        for (const item of toDelete) {
          await deleteDoc(doc(db, colName, item.id));
          console.log(`Deleted duplicate: ${item.id}`);
        }
      }
    }
  }
}
