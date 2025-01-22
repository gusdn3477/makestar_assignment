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
    infinite: true, // 무한 루프
    speed: 500, // 슬라이드 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
    centerMode: true, // 현재 슬라이드를 가운데 정렬
    centerPadding: '20px', // 양쪽에 보일 카드의 너비
    arrows: false,
  };

  return (
    <MySlider {...settings}>
      {albumList.map((album) => (
        <div key={album.id}>
          <div className="flex items-center justify-center">
            <img src={album.nfcImageUrl || ''} alt="image" className="rounded-2xl object-contain" />
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
