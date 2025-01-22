import AlbumList from '../components/AlbumList';
import CloseButton from '../components/CloseButton';
import InnerLayout from '../components/InnerLayout';

export default function AlbumManagement() {
  return (
    <InnerLayout
      headerLeft={<h1 className="m-0 text-sm">앨범관리</h1>}
      headerRight={<CloseButton />}
    >
      <div className="h-[8px] w-full bg-[#F5F5F5]"></div>
      <div className="h-full w-full bg-white p-4">
        <AlbumList />
      </div>
    </InnerLayout>
  );
}
