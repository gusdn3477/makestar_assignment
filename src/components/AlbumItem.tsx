import { useAlbumStore, useBottomSheetStore } from '../store';
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
}: AlbumItemProps) {
  const handleBottomSheetOpen = useBottomSheetStore((state) => state.handleOpen);
  const handleAlbumSelect = useAlbumStore((state) => state.setAlbum);

  const handleItemClick = (id: number, isDownloaded: boolean) => {
    handleBottomSheetOpen('download');
    handleAlbumSelect({ id, isDownloaded });
  };

  return (
    <li className="mt-3 flex h-[85px] w-full justify-between">
      <div className="flex items-center">
        <img
          src={imageUrl}
          alt={title}
          className={`h-[85px] w-[54px] rounded-sm ${isDownloaded ? '' : 'blur-[1px]'}`}
        />
        <section className="ml-3 flex h-full w-3/4 flex-col justify-center">
          <p className={`text-sm ${isDownloaded ? '' : 'text-[#A5A5A5]'}`}>{title}</p>
          <p className={`text-xs ${isDownloaded ? 'text-[#6C6C6C]' : 'text-[#A5A5A5]'}`}>
            {artistName} / {releaseDate}
          </p>
          <p className="text-[11px] text-[#A5A5A5]">
            타입 : {typeCount} / 수량 : {albumCount}
          </p>
        </section>
      </div>
      <div>
        <ThreeDot onClick={() => handleItemClick(id, !!isDownloaded)} />
      </div>
    </li>
  );
}
