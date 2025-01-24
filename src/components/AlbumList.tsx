import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import _ from 'lodash';
import AlbumRepository from '../repository/AlbumRepository';
import { useAlbumStore, useBottomSheetStore } from '../store';
import { formatDate } from '../util/formatDate';
import AlbumItem from './AlbumItem';
import BottomSheet from './BottomSheet';
import SwitchButton from './SwitchButton';

export default function AlbumList() {
  const [options, setOptions] = useState([
    { id: 1, name: '최신 발매일 순', checked: true },
    { id: 2, name: '앨범 이름 순', checked: false },
  ]);

  const albumList = useAlbumStore((state) => state.albumList);
  const selectedAlbum = useAlbumStore((state) => state.selectedAlbum);
  const handleAlbumSelect = useAlbumStore((state) => state.setAlbum);
  const handleAlbumUpdate = useAlbumStore((state) => state.updateAlbum);
  const downloadAlbum = useAlbumStore((state) => state.addAlbum);
  const removeAlbum = useAlbumStore((state) => state.removeAlbum);

  const sortBottomSheetOpen = useBottomSheetStore((state) => state.visible['sort']);
  const downloadBottomSheetOpen = useBottomSheetStore((state) => state.visible['download']);
  const handleBottomSheetOpen = useBottomSheetStore((state) => state.handleOpen);
  const handleBottomSheetClose = useBottomSheetStore((state) => state.handleClose);

  const threeDotOptions = [
    { id: selectedAlbum.id, name: selectedAlbum.isDownloaded ? '삭제하기' : '다운로드' },
  ];

  const totalAlbumCount = albumList.reduce((sum, album) => sum + album.albumCount, 0); // 전체 갯수
  const totalTypeCount = albumList.reduce((sum, album) => sum + album.typeCount, 0);

  const getFilteredData = () => {
    const selectedOption = options.filter((option) => option.checked === true)[0];
    const copiedAlbumList = _.cloneDeep(albumList);
    if (selectedOption.id === 1) {
      copiedAlbumList.sort(
        (a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
      );
    } else {
      copiedAlbumList.sort((a, b) => a.title.localeCompare(b.title));
    }
    return copiedAlbumList;
  };

  const handleOptionClick = (id: number) => {
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

  const handleAlbumDownload = useMutation({
    mutationFn: async () => AlbumRepository.getAlbumDownloadInfo({ album_id: selectedAlbum.id }),
    onSuccess: (data) => {
      // 작업 성공 시 실행
      handleAlbumUpdate(selectedAlbum.id, { isDownloaded: true });
      data.album && downloadAlbum(data.album);
    },
    onError: (error) => {
      // 작업 실패 시 실행
      console.error('Error:', error);
    },
  });

  const handleThreeDotOptionClick = async (id: number) => {
    if (selectedAlbum.isDownloaded) {
      handleAlbumUpdate(id, { isDownloaded: false });
      removeAlbum(id);
    } else {
      await handleAlbumDownload.mutateAsync();
    }
    handleAlbumSelect({ id: -1, isDownloaded: false });
  };

  return (
    <main className="h-full w-full bg-white p-4">
      <div className="flex flex-row items-center justify-between">
        <p>
          <span className="text-sm text-[#6C6C6C]">전체 {albumList.length}</span>
          <span className="ml-2 text-[13px] text-[#A5A5A5]">
            (타입 {totalTypeCount} 수량 {totalAlbumCount})
          </span>
        </p>
        <div className="flex" onClick={() => handleBottomSheetOpen('sort')}>
          <SwitchButton />
          <span className="text-sm text-[#6C6C6C]">순서 변경</span>
        </div>
      </div>
      <ul className="mt-2 max-h-[calc(100%-50px)] overflow-y-scroll">
        {getFilteredData().map((album) => (
          <AlbumItem
            key={album.id}
            id={album.id}
            title={album.title}
            releaseDate={formatDate(album.releaseDate)}
            imageUrl={album.nfcImageUrl || ''}
            artistName={album.artistName}
            typeCount={album.typeCount}
            albumCount={album.albumCount}
            isDownloaded={album.isDownloaded}
            isLoading={selectedAlbum.id === album.id && handleAlbumDownload.isPending}
          />
        ))}
      </ul>
      <BottomSheet
        open={sortBottomSheetOpen}
        options={options}
        onClose={() => handleBottomSheetClose('sort')}
        onClick={handleOptionClick}
      />
      <BottomSheet
        open={downloadBottomSheetOpen}
        options={threeDotOptions}
        onClose={() => handleBottomSheetClose('download')}
        onClick={handleThreeDotOptionClick}
      />
    </main>
  );
}
