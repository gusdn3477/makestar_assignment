import { useSuspenseQuery } from '@tanstack/react-query';
import AlbumList from '../components/AlbumList';
import CloseButton from '../components/CloseButton';
import InnerLayout from '../components/InnerLayout';
import AlbumRepository from '../repository/AlbumRepository';
import { useAlbumStore } from '../store';

export default function AlbumManagement() {
  const setAlbumList = useAlbumStore((state) => state.setAlbumList);

  useSuspenseQuery({
    queryKey: ['albumlist'],
    queryFn: async () => {
      const data = await AlbumRepository.getAlbumList();
      const transformedData = data.album_list.map((album) => ({
        id: album.id,
        title: album.title, // 앨범 이름
        releaseDate: album.released_at, // 발매일
        artistName: album.artist.name, // 가수 이름 (그룹 이름)
        artistProfile: album.artist.profile_image || null, // 가수 프로필 사진 (필드가 없으니 null 처리)
        typeCount: album.published_album_list.length, // 타입 개수
        versionCode: album.version_code,
        albumCount: album.count, // 앨범 수량
        nfcImageUrl: album.published_album_list[0]?.nfc_image_url || null, // NFC 이미지 URL
        boxImageUrl: album.published_album_list[0]?.box_image_url || null, // 박스 이미지 URL
      }));
      setAlbumList(transformedData);
      return transformedData; // 캐시에 저장
    },
  });

  return (
    <InnerLayout
      headerLeft={<h1 className="m-0 text-sm">앨범관리</h1>}
      headerRight={<CloseButton />}
      className="overflow-y-hidden"
    >
      <div className="h-[8px] w-full bg-[#F5F5F5]" />
      <AlbumList />
    </InnerLayout>
  );
}
