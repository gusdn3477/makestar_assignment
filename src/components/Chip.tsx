import React from 'react';

type ChipProps = {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
};

const Chip: React.FC<ChipProps> = ({ label, onClick, icon, className }) => {
  return (
    <button
      className={`inline-flex h-[26px] w-[58px] items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 shadow-sm ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default Chip;
