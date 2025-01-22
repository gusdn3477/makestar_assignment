import React from 'react';

type ChipProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const Chip: React.FC<ChipProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={`flex h-[26px] w-[58px] items-center justify-center rounded-full bg-gray-100 px-1 py-1 text-sm font-medium text-gray-800 shadow-sm ${className}`}
      onClick={onClick}
    >
      <span className="text-xs">{label}</span>
    </button>
  );
};

export default Chip;
