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
    <li className="mt-3 flex h-[85px] w-full items-center">
      <img src={imageUrl} alt="" width={54} height={85} className="rounded-sm" />
      <section className="ml-3 flex h-full flex-col justify-center">
        <p className="text-sm">{title}</p>
        <p className="text-xs text-[#6C6C6C]">
          {artistName} / {releaseDate}
        </p>
        <p className="text-[11px] text-[#A5A5A5]">
          타입 : {typeCount} / 수량 : {albumCount}
        </p>
      </section>
    </li>
  );
}
