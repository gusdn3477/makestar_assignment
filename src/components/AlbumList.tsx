import CardItem from './AlbumItem';

export default function AlbumList() {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <p>
          <span className="text-sm">전체 5</span>
          <span className="text-xs text-[#A5A5A5]">타입 7 수량 9</span>
        </p>
        <span>순서 변경</span>
      </div>
      <div>
        <CardItem />
      </div>
    </>
  );
}
