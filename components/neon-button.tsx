'use client';

export function NeonButton({ 
  children, 
  href, 
  variant = 'primary',
  className,
  onClick,
  target
}: { 
  children: React.ReactNode; 
  href?: string; 
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
  target?: string;
}) {
  const baseClasses = "px-6 py-3 rounded-full font-bold transition-all duration-300 neon-glow";
  const variantClasses = variant === 'primary' 
    ? "bg-cyan-500 text-black hover:bg-cyan-400" 
    : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10";

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variantClasses} ${className}`} target={target}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
}
