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
    <>
      <Header left={headerLeft} right={headerRight} />
      <div className={`flex-1 px-5 ${className}`}>{children}</div>
    </>
  );
}
