export default function CardItem() {
  return (
    <li className="flex h-[85px] w-full items-center justify-between">
      <div className="h-full">
        <img src="" alt="" width={54} height={85} />
      </div>
      <div className="h-full flex-1 items-center justify-between">
        <span>제목</span>
        <span>가수이름</span>
        <span>타입 수량</span>
      </div>
    </li>
  );
}
