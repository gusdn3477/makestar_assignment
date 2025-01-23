import { useCallback, useState } from 'react';
import { useAlbumStore } from '../store';
import { formatDate } from '../util/formatDate';
import AlbumItem from './AlbumItem';
import BottomSheet from './BottomSheet';
import SwitchButton from './SwitchButton';

export default function AlbumList() {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [options, setOptions] = useState([
    { id: 1, name: '최신 발매일 순', checked: true },
    { id: 2, name: '앨범 이름 순', checked: false },
  ]);

  // const selectedOption = options.find((option) => option.checked);

  const handleOptionChange = (id: number) => {
    const updatedOptions = options.map((option) =>
      option.id === id
        ? {
            ...option,
            checked: true,
          }
        : {
            ...option,
            checked: false,
          }
    );
    setOptions(updatedOptions);
  };
  const albumList = useAlbumStore((state) => state.albumList);

  const totalAlbumCount = albumList.reduce((sum, album) => sum + album.albumCount, 0); // 전체 갯수
  const totalTypeCount = albumList.reduce((sum, album) => sum + album.typeCount, 0);

  const handleBottomSheetOpen = useCallback(() => {
    setBottomSheetOpen(true);
  }, []);

  const handleBottomSheetClose = useCallback(() => {
    setBottomSheetOpen(false);
  }, []);

  return (
    <main className="h-full w-full bg-white p-4">
      <div className="flex flex-row items-center justify-between">
        <p>
          <span className="text-sm text-[#6C6C6C]">전체 {albumList.length}</span>
          <span className="ml-2 text-[13px] text-[#A5A5A5]">
            (타입 {totalTypeCount} 수량 {totalAlbumCount})
          </span>
        </p>
        <div className="flex" onClick={handleBottomSheetOpen}>
          <SwitchButton />
          <span className="text-sm text-[#6C6C6C]">순서 변경</span>
        </div>
      </div>
      <ul className="mt-2">
        {albumList.map((album) => (
          <AlbumItem
            key={album.id}
            title={album.title}
            releaseDate={formatDate(album.releaseDate)}
            imageUrl={album.nfcImageUrl || ''}
            artistName={album.artistName}
            typeCount={album.typeCount}
            albumCount={album.albumCount}
          />
        ))}
      </ul>
      <BottomSheet
        open={bottomSheetOpen}
        options={options}
        onClose={handleBottomSheetClose}
        onChange={handleOptionChange}
      />
    </main>
  );
}
