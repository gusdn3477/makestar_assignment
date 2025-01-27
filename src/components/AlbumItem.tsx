import { useAlbumStore, useBottomSheetStore } from '../store';
import Loader from './Loader';
import ThreeDot from './ThreeDot';

// 다양한 아이템 데이터가 있는 경우
interface AlbumItemProps {
  id: number;
  title: string;
  releaseDate: string;
  imageUrl: string;
  artistName: string;
  typeCount: number;
  albumCount: number;
  isDownloaded?: boolean;
  isDownloading?: boolean;
  isLoading?: boolean;
  isUpdated?: boolean;
}

export default function AlbumItem({
  id,
  title,
  releaseDate,
  imageUrl,
  artistName,
  typeCount,
  albumCount,
  isDownloaded,
  isDownloading,
  isLoading,
  isUpdated,
}: AlbumItemProps) {
  const handleBottomSheetOpen = useBottomSheetStore((state) => state.handleOpen);
  const handleAlbumSelect = useAlbumStore((state) => state.setAlbum);

  const handleItemClick = (id: number, isDownloaded: boolean) => {
    if (isLoading) return;
    handleBottomSheetOpen('download');
    handleAlbumSelect({ id, isDownloaded });
  };

  return (
    <li className="mt-3 flex h-[85px] w-full justify-between">
      <div className="flex items-center">
        <div className="relative h-[85px] w-[54px]">
          <img
            src={imageUrl}
            alt={title}
            className={`h-[85px] w-[54px] rounded-sm ${isDownloaded ? '' : 'blur-[1px]'}`}
          />
          <div className="absolute bottom-[3px] rounded bg-black bg-opacity-50 text-sm text-white">
            텍스트 예제
          </div>
        </div>
        <section className="ml-3 flex h-full w-3/5 flex-col justify-center">
          <p className={`truncate text-sm ${isDownloaded ? '' : 'text-[#A5A5A5]'}`}>{title}</p>
          {isDownloading ? (
            <div className="flex h-6 w-4 items-center justify-center">
              <Loader size={15} />
            </div>
          ) : (
            <>
              <p className={`text-xs ${isDownloaded ? 'text-[#6C6C6C]' : 'text-[#A5A5A5]'}`}>
                {artistName} • {releaseDate}
              </p>
              <p className="text-[11px] text-[#A5A5A5]">
                타입 : {typeCount} • 수량 : {albumCount}
              </p>
            </>
          )}
        </section>
      </div>
      <div className="w-[10px]">
        <ThreeDot onClick={() => handleItemClick(id, !!isDownloaded)} />
      </div>
    </li>
  );
}
