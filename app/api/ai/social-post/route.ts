import { NextResponse } from 'next/server';
import { model } from '@/lib/gemini';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt required' }, { status: 400 });
    }

    const result = await model.generateContent(`
      Create:
      1. Social media caption
      2. Hashtags
      3. CTA
      4. Marketplace title
      5. SEO description

      Topic: ${prompt}
    `);

    return NextResponse.json({ text: result.response.text() });
  } catch (error) {
    console.error('AI generation error:', error);
    return NextResponse.json({ error: 'AI generation failed' }, { status: 500 });
  }
}
