import { useCallback, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import AlbumRepository from '../repository/AlbumRepository';
import { formatDate } from '../util/formatDate';
import AlbumItem from './AlbumItem';
import BottomSheet from './BottomSheet';
import SwitchButton from './SwitchButton';

export default function AlbumList() {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const { data } = useSuspenseQuery({
    queryKey: ['albumlist'],
    queryFn: AlbumRepository.getAlbumList,
  });

  const albumData = data.album_list.map((album) => ({
    id: album.id,
    title: album.title, // 앨범 이름
    releaseDate: album.released_at, // 발매일
    artistName: album.artist.name, // 가수 이름 (그룹 이름)
    artistProfile: album.artist.profile_image || null, // 가수 프로필 사진 (필드가 없으니 null 처리)
    typeCount: album.published_album_list.length, // 타입 개수
    albumCount: album.count, // 앨범 수량
    nfcImageUrl: album.published_album_list[0]?.nfc_image_url || null, // NFC 이미지 URL
    boxImageUrl: album.published_album_list[0]?.box_image_url || null, // 박스 이미지 URL
  }));

  const totalAlbumCount = data.album_list.reduce((sum, album) => sum + album.count, 0); // 전체 갯수
  const totalTypeCount = data.album_list.reduce(
    (sum, album) => sum + album.published_album_list.length,
    0
  );

  const handleBottomSheetOpen = useCallback(() => {
    setBottomSheetOpen(true);
  }, []);

  const handleBottomSheetClose = useCallback(() => {
    setBottomSheetOpen(false);
  }, []);

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <p>
          <span className="text-sm text-[#6C6C6C]">전체 {data.album_list.length}</span>
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
        {albumData.map((album) => (
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
      <BottomSheet open={bottomSheetOpen} onClose={handleBottomSheetClose} />
    </>
  );
}
