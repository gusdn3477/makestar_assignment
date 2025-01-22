import { useNavigate } from 'react-router-dom';
import Chip from '../components/Chip';
import InnerLayout from '../components/InnerLayout';

export default function Home() {
  const navigate = useNavigate();

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
      <main>바디</main>
    </InnerLayout>
  );
}
