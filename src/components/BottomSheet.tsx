import React from 'react';
import checkIcon from '../assets/checkIcon.svg';

interface BottomSheetProps {
  open: boolean;
  options: { id: number; name: string; checked?: boolean }[];
  onClose: () => void;
  onClick: (id: number) => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ open, onClose, options, onClick }) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end bg-black bg-opacity-50" onClick={onClose}>
          <div
            className="w-full rounded-t-xl bg-white p-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center">
              <div className="flex h-[4px] w-[32px] rounded-full bg-[#E8E8E8]" />
            </div>
            <div className="mt-4">
              <ul>
                {options.map((option) => (
                  <li
                    key={option.id}
                    className={`flex h-[56px] items-center justify-between text-sm ${option.checked && 'text-[#FF0099]'}`}
                    onClick={() => onClick(option.id)}
                  >
                    <span>{option.name}</span>
                    {option.checked && <img src={checkIcon} alt="checked" />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomSheet;
