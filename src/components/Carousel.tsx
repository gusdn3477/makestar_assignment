import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../assets/slider.css';
import { useAlbumStore } from '../store';
import { formatDate } from '../util/formatDate';

const MySlider = Slider as unknown as React.FC<any>;

const Carousel = () => {
  const albumList = useAlbumStore((state) => state.albumList);

  const settings = {
    infinite: false,
    speed: 500, // 슬라이드 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
    centerMode: true, // 현재 슬라이드를 가운데 정렬
    centerPadding: '60px', // 양쪽에 보일 카드의 너비
    arrows: false,
  };

  const downloadList = albumList.filter((album) => album.isDownloaded === true);

  return (
    <MySlider {...settings}>
      {downloadList.map((album) => (
        <div key={album.id} className="mt-12">
          <div className="flex items-center justify-center">
            <img
              src={album.nfcImageUrl || ''}
              alt={album.title}
              className="h-[457px] w-[290px] rounded-2xl"
            />
          </div>
          <section className="mt-6 flex flex-col items-center justify-center">
            <strong className="text-xl">{album.title}</strong>
            <span className="text-[#6C6C6C]">{album.artistName}</span>
            <span className="text-sm text-[#6C6C6C]">{formatDate(album.releaseDate)}</span>
          </section>
        </div>
      ))}
    </MySlider>
  );
};

export default Carousel;
