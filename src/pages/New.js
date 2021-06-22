import React from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { newContents } from "../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrapper = styled.div`
  margin-bottom: 20px;
`;

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "95%",
        // background:
        //   "url(https://t1.kakaocdn.net/friends/new_store/2.0/pc/arrow-right.png)", //커스텀 애로우 아직
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "2%",
        zIndex: "1",
        // background:
        //   "url(https://t1.kakaocdn.net/friends/new_store/2.0/pc/arrow-right.png)",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: true,
  // autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const SliderBarTextArea = styled.div`
  margin-top: -50px;
  padding-left: 20px;
`;

function New() {
  return (
    <>
      <Header />
      <Nav />
      <Slider {...settings}>
        {newContents.map((newItem, index) => {
          return (
            <SliderWrapper>
              <img width="100%" src={newItem.url} alt="슬라이더 이미지" />
              <SliderBarTextArea>
                <p>{newItem.title}</p>
                <p>{newItem.subTitle}</p>
              </SliderBarTextArea>
              {}
            </SliderWrapper>
          );
        })}
      </Slider>
    </>
  );
}

export default New;
