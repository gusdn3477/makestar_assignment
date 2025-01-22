export interface GetOwnAlbumListInfoResponse {
  result: boolean;
  message: string;
  code: string;
  external_data: any | null; // external_data가 null이므로 구체적인 타입이 필요하다면 변경
  album_list: Album[];
}

export interface Album {
  id: number;
  title: string;
  version_code: number;
  released_at: string; // ISO 8601 형식의 날짜 문자열
  artist: Artist;
  count: number;
  published_album_list: PublishedAlbum[];
}

export interface Artist {
  id: number;
  name: string;
}

export interface Company {
  id: number;
  name: string;
  created_at: string;
}

export interface PublishedAlbum {
  id: number;
  album_type: number;
  nfc_image_id: number;
  nfc_image_index: number;
  nfc_image_url: string;
  box_image_url: string;
  uuid: string; // UUID 형식
}

// 요청(Request) 타입
export interface GetDownloadInformationByAlbumIdRequest {
  album_id: number; // 앨범 ID (필수)
}

// 응답(Response) 타입
export interface GetDownloadInformationByAlbumIdResponse {
  result: boolean;
  message: string;
  code: string;
  external_data: any | null;
  album?: Album;
  nfc_image_list?: NFCImage[];
}

export interface Album {
  id: number;
  count: number;
  nfc_image: ImageDetail;
  box_image: ImageDetail;
  origin_album: OriginAlbum;
  created_by_list: Creator[];
  released_by_list: Creator[];
  category_list: string[];
  information: AlbumInformation;
  link: string;
  highlight_music: HighlightMusic;
  like_count: number;
  created_at: string;
  released_at: string;
  available_at: string;
  music_list: any[];
  photo_list: Photo[];
  available_sample: boolean;
}

export interface NFCImage {
  id: number;
  index: number;
  count: number;
  photo_type: number;
  name: string;
  front: ImageFile;
  like_count: number;
  created_at: string;
}

export interface Photo {
  id: number;
  index: number;
  album: {
    id: number;
    version_code: number;
    title: string;
  };
  photo_type: number;
  member_list: Member[];
  grade: number;
  name: string;
  front: ImageFile;
  back?: ImageFile | null;
  like_count: number;
  created_at: string;
}

export interface ImageDetail {
  id: number;
  index: number;
  count: number;
  photo_type: number;
  name: string;
  front: ImageFile;
  like_count: number;
  created_at: string;
}

export interface ImageFile {
  id: number;
  filename: string;
  thumb_url: string;
  thumb_size: number;
  thumb_cropped_url?: string;
  thumb_cropped_size?: number;
  mime: string;
}

export interface OriginAlbum {
  id: number;
  version_code: number;
  is_collectable: boolean;
  is_donation_album: boolean;
  donation_price: number;
  album_type: number;
  title: string;
  artist: Artist;
  created_by_list: Creator[];
  released_by_list: Creator[];
  category_list: string[];
  information: AlbumInformation;
  link: string;
  highlight_music: HighlightMusic;
  like_count: number;
  created_at: string;
  released_at: string;
  available_at: string;
  music_list: any[];
}

export interface Artist {
  id: number;
  artist_type: number;
  name: string;
  nickname: string;
  member_list: Member[];
  company: Company;
  published_at: string;
  homepage: string;
  site_info: SiteInfo;
  introduction: string;
  profile_image: ImageFile;
  created_at: string;
}

export interface Member {
  id: number;
  name: string;
  born_at: string;
  blood_type: number;
  height: number;
  weight: number;
  position: string;
  site_info: SiteInfo;
  created_at: string;
}

export interface Creator {
  id: number;
  name: string;
  created_at: string;
}

export interface SiteInfo {
  twitter: string;
  youtube: string;
  fan_club: string;
  homepage: string;
  instagram: string;
}

export interface AlbumInformation {
  text: string;
  text_short: string;
}

export interface HighlightMusic {
  id: number;
  filename: string;
  origin_url: string;
  origin_size: number;
  mime: string;
  duration_seconds: number;
}
