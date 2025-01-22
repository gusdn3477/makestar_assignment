import Chip from '../components/Chip';
import InnerLayout from '../components/InnerLayout';

export default function Home() {
  return (
    <InnerLayout
      headerLeft={<h1 className="m-0 bg-red-400">앨범</h1>}
      headerRight={<Chip label="앨범 제목" />}
    >
      <div>바디</div>
    </InnerLayout>
  );
}
