import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Album as AlbumDetail } from '../dto/AlbumDTO';
import { ImageFile } from '../types/ImageFile';

interface Album {
  id: number;
  title: string;
  releaseDate: string;
  artistName: string;
  artistProfile: ImageFile;
  versionCode: number;
  typeCount: number;
  albumCount: number;
  nfcImageUrl: string | null;
  boxImageUrl: string | null;
  isDownloaded?: boolean;
  isUpdated?: boolean;
}

interface AlbumStore {
  albumList: Album[];
  downloadedAlbumList: AlbumDetail[];
  selectedAlbum: { id: number; isDownloaded: boolean };
  setAlbumList: (albums: Album[]) => void;
  setAlbum: (album: { id: number; isDownloaded: boolean }) => void;
  addAlbum: (album: AlbumDetail) => void;
  updateAlbum: (id: number, updatedData: Partial<Album>) => void;
  removeAlbum: (id: number) => void;
}

export const useAlbumStore = create<AlbumStore>()(
  persist(
    (set) => ({
      albumList: [],
      downloadedAlbumList: [],
      selectedAlbum: {
        id: -1,
        isDownloaded: false,
      },
      // 앨범 리스트 설정
      setAlbumList: (albums) =>
        set((state) => ({
          albumList: albums.map((album) => ({
            ...album,
            isDownloaded:
              state.albumList.find((item) => item.id === album.id)?.isDownloaded ?? false,
          })),
        })),
      setAlbum: (album) => set({ selectedAlbum: album }),

      // 앨범 업데이트
      updateAlbum: (id, updatedData) =>
        set((state) => ({
          albumList: state.albumList.map((album) =>
            album.id === id ? { ...album, ...updatedData } : album
          ),
        })),

      // 앨범 추가
      addAlbum: (album) =>
        set((state) => ({
          downloadedAlbumList: [...state.downloadedAlbumList, album],
        })),

      // 앨범 삭제
      removeAlbum: (id) =>
        set((state) => ({
          downloadedAlbumList: state.downloadedAlbumList.filter((album) => album.id !== id),
        })),
    }),
    {
      name: 'album-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
