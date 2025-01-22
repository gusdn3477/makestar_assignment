import {
  GetDownloadInformationByAlbumIdRequest,
  GetDownloadInformationByAlbumIdResponse,
  GetOwnAlbumListInfoResponse,
} from '../dto/AlbumDTO';
import API from '../util/API';

class AlbumRepository {
  async getAlbumList(): Promise<GetOwnAlbumListInfoResponse> {
    const { data } = await API.get('/get_own_album_list_info/');
    return data;
  }

  async getAlbumDownloadList({
    album_id,
  }: GetDownloadInformationByAlbumIdRequest): Promise<GetDownloadInformationByAlbumIdResponse> {
    const { data } = await API.post('get_download_information_by_album_id/', { album_id });
    return data;
  }
}

export default new AlbumRepository();
