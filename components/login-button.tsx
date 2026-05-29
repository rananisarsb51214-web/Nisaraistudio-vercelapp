'use client';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useAuth } from './auth-provider';
import { NeonButton } from './neon-button';

export function AuthButton() {
  const { user } = useAuth();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  if (user) {
    return (
      <NeonButton variant="outline" onClick={handleSignOut}>
        Sign Out ({user.displayName || 'User'})
      </NeonButton>
    );
  }

  return (
    <NeonButton variant="primary" onClick={handleSignIn}>
      Login with Google
    </NeonButton>
  );
}
