import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { newContents } from "../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const SliderWrapper = styled.div`
  margin-bottom: 20px;
`;

const SliderBarTextArea = styled.div`
  margin-top: -70px;
  padding-left: 20px;
  color: white;
`;

const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  font-size: 16px;
`;

const Title = styled.b`
  font-size: 24px;
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
                <Title>{newItem.title}</Title>
                <SubTitleWrapper>
                  <p>{newItem.subTitle}</p>
                  <span>
                    {index + 1}/ {newContents.length}
                  </span>
                </SubTitleWrapper>
              </SliderBarTextArea>
            </SliderWrapper>
          );
        })}
      </Slider>
    </>
  );
}

export default New;
