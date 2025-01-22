// 다양한 아이템 데이터가 있는 경우
interface AlbumItemProps {
  title: string;
  releaseDate: string;
  imageUrl: string;
  artistName: string;
  typeCount: number;
  albumCount: number;
}

export default function AlbumItem({
  title,
  releaseDate,
  imageUrl,
  artistName,
  typeCount,
  albumCount,
}: AlbumItemProps) {
  return (
    <li className="flex h-[85px] w-full items-center justify-between">
      <img src={imageUrl} alt="" width={54} height={85} className="rounded-sm" />
      <div className="h-full flex-1 items-center justify-between">
        <span className="text-sm">{title}</span>
        <br />
        <span className="text-xs text-[#6C6C6C]">
          {artistName} / {releaseDate}
        </span>
        <br />
        <span className="text-[11px] text-[#A5A5A5]">
          {typeCount} / {albumCount}
        </span>
      </div>
    </li>
  );
}
