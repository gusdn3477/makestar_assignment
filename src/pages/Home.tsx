import Chip from '../components/Chip';
import InnerLayout from '../components/InnerLayout';

export default function Home() {
  return (
    <InnerLayout
      headerLeft={
        <>
          <h1 className="m-0">앨범</h1>
          <Chip label="앨범관리" className="ml-2" />
        </>
      }
    >
      <div>바디</div>
    </InnerLayout>
  );
}
