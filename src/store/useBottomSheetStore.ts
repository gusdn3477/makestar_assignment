import { create } from 'zustand';

export type BottomSheetType = keyof BottomSheetState['visible'];

interface BottomSheetState {
  visible: {
    sort: boolean;
    download: boolean;
  };
}

interface BottomSheetAction {
  handleOpen: (type: BottomSheetType) => void;
  handleClose: (type: BottomSheetType) => void;
}

export const useBottomSheetStore = create<BottomSheetState & BottomSheetAction>((set) => ({
  // 초기 상태
  visible: {
    sort: false,
    download: false,
  },
  handleOpen: (type) => set((state) => ({ visible: { ...state.visible, [type]: true } })),
  handleClose: (type) => set((state) => ({ visible: { ...state.visible, [type]: false } })),
}));
