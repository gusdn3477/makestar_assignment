import React from 'react';

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ open, onClose }) => {
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
                <li className="h-[56px]">최신 발매일 순</li>
                <li className="h-[56px]">앨범 이름 순</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomSheet;
