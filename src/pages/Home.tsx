import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Chip from '../components/Chip';
import InnerLayout from '../components/InnerLayout';
import { useAlbumStore } from '../store';

export default function Home() {
  const navigate = useNavigate();
  const albumList = useAlbumStore((state) => state.albumList);
  const downloadAlbumList = albumList.filter((album) => album.isDownloaded);

  const handleChipClick = () => {
    navigate('/management');
  };
  return (
    <InnerLayout
      headerLeft={
        <>
          <h1 className="m-0 text-lg">앨범</h1>
          <Chip label="앨범관리" className="ml-2" onClick={handleChipClick} />
        </>
      }
    >
      <main
        className={
          downloadAlbumList.length === 0 ? 'flex h-full w-full items-center justify-center' : ''
        }
      >
        {downloadAlbumList.length === 0 ? (
          <span>다운로드 목록이 비어 있습니다. </span>
        ) : (
          <Carousel />
        )}
      </main>
    </InnerLayout>
  );
}
