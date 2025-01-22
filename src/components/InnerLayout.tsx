import { ReactNode } from 'react';
import Header from './Header';

interface InnerLayoutProps {
  children: ReactNode;
  className?: string;
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
}
export default function InnerLayout({
  children,
  className,
  headerLeft,
  headerRight,
}: InnerLayoutProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <Header left={headerLeft} right={headerRight} />
      <div className={`flex h-full flex-col ${className ?? ''}`}>{children}</div>
    </div>
  );
}
