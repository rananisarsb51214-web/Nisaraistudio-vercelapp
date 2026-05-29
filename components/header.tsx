'use client';
import { AuthButton } from '@/components/login-button';

export function Header() {
  return (
    <header className="fixed w-full flex items-center justify-between p-6 z-50 bg-black/50 backdrop-blur-md">
      <div className="font-bold text-xl">Nisar Studio</div>
      <AuthButton />
    </header>
  );
}
