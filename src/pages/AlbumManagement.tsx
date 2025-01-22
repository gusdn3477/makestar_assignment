import CloseButton from '../components/CloseButton';
import InnerLayout from '../components/InnerLayout';

export default function AlbumManagement() {
  return (
    <InnerLayout
      headerLeft={<h1 className="m-0 bg-red-400">앨범</h1>}
      headerRight={<CloseButton />}
    >
      <div>바디</div>
    </InnerLayout>
  );
}
