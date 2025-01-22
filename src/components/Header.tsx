import { ReactNode } from 'react';

interface HeaderProps {
  left?: ReactNode;
  right?: ReactNode;
}
export default function Header({ left, right }: HeaderProps) {
  return (
    <header className="align-center m-0 flex h-[56px] w-full justify-between bg-white p-4">
      <div className="flex flex-1 items-center justify-start">{left}</div>
      <div className="flex flex-1 items-center justify-end">{right}</div>
    </header>
  );
}
