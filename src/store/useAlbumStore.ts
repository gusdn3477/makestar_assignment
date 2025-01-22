import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ImageFile } from '../types/ImageFile';

interface Album {
  id: number;
  title: string;
  releaseDate: string;
  artistName: string;
  artistProfile: ImageFile;
  typeCount: number;
  albumCount: number;
  nfcImageUrl: string | null;
  boxImageUrl: string | null;
  isDownloaded?: boolean;
  isUpdated?: boolean;
}

interface AlbumStore {
  albumList: Album[];
  setAlbumList: (albums: Album[]) => void;
  addAlbum: (album: Album) => void;
  updateAlbum: (id: number, updatedData: Partial<Album>) => void;
  removeAlbum: (id: number) => void;
}

export const useAlbumStore = create<AlbumStore>()(
  persist(
    (set) => ({
      albumList: [],

      // 앨범 리스트 설정
      setAlbumList: (albums) => set({ albumList: albums }),

      // 앨범 추가
      addAlbum: (album) =>
        set((state) => ({
          albumList: [...state.albumList, album],
        })),

      // 앨범 업데이트
      updateAlbum: (id, updatedData) =>
        set((state) => ({
          albumList: state.albumList.map((album) =>
            album.id === id ? { ...album, ...updatedData } : album
          ),
        })),

      // 앨범 삭제
      removeAlbum: (id) =>
        set((state) => ({
          albumList: state.albumList.filter((album) => album.id !== id),
        })),
    }),
    {
      name: 'album-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
