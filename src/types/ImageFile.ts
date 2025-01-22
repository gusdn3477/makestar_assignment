export interface ImageFile {
  id: number;
  filename: string;
  thumb_url: string;
  thumb_size: number;
  thumb_cropped_url?: string;
  thumb_cropped_size?: number;
  mime: string;
}
