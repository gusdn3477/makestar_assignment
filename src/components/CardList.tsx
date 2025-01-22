import CardItem from './CardItem';

export default function CardList() {
  return (
    <>
      <p className="flex flex-row items-center justify-between">
        <div>
          <span className="text-sm">전체 5</span>
          <span className="text-xs text-[#A5A5A5]">타입 7 수량 9</span>
        </div>
        <div>순서 변경</div>
      </p>
      <div>
        <CardItem />
      </div>
    </>
  );
}
