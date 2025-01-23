// 다양한 아이템 데이터가 있는 경우
interface AlbumItemProps {
  title: string;
  releaseDate: string;
  imageUrl: string;
  artistName: string;
  typeCount: number;
  albumCount: number;
  isDownloaded?: boolean;
}

export default function AlbumItem({
  title,
  releaseDate,
  imageUrl,
  artistName,
  typeCount,
  albumCount,
  isDownloaded,
}: AlbumItemProps) {
  return (
    <li className="mt-3 flex h-[85px] w-full items-center">
      <img
        src={imageUrl}
        alt={title}
        className={`h-[85px] w-[54px] rounded-sm ${isDownloaded ? '' : 'blur-[1px]'}`}
      />
      <section className="ml-3 flex h-full flex-col justify-center">
        <p className={`text-sm ${isDownloaded ? '' : 'text-[#A5A5A5]'}`}>{title}</p>
        <p className={`text-xs ${isDownloaded ? 'text-[#6C6C6C]' : 'text-[#A5A5A5]'}`}>
          {artistName} / {releaseDate}
        </p>
        <p className="text-[11px] text-[#A5A5A5]">
          타입 : {typeCount} / 수량 : {albumCount}
        </p>
      </section>
    </li>
  );
}
