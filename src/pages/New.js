import React from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import NewProductsItem from "../components/NewProducts";
import Footer from "../components/Footer";
import { newSlideItem, newThemeList } from "../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoBagOutline } from "react-icons/all";

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

const NewThemeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`;

const NewTheme = styled.li`
  width: 275px;
  margin-bottom: 20px;
`;

const NewThemeTitleWrapper = styled.div`
  padding-top: 70px;
  padding-left: 20px;
  border-top: 10px solid rgb(229, 229, 229);
`;

const NewThemeSubTitle = styled.p`
  color: #9a9a9e;
  font-size: 18px;
`;

const NewThemeTitle = styled.p`
  font-size: 32px;
`;

const ItemTitlewrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemTitle = styled.p`
  font-size: 18px;
  color: #777777;

  ${props =>
    props.price &&
    css`
      color: #000000;
      font-weight: bold;
    `}
`;

const MoreItemBtn = styled.div`
  width: 343px;
  margin: 0 auto;
  border: 1px solid rgb(230, 230, 230);
  text-align: center;
  font-size: 15px;
  padding: 15px 20px;
  margin-top: 30px;
`;

const Article = styled.article`
  padding-bottom: 50px;
  border-bottom: 17px solid rgb(229, 229, 229);
`;

function New() {
  return (
    <>
      <Header />
      <Nav />
      <Slider {...settings}>
        {newSlideItem.map((newItemSlide, index) => {
          return (
            <SliderWrapper>
              <img width="100%" src={newItemSlide.url} alt="슬라이더 이미지" />
              <SliderBarTextArea>
                <Title>{newItemSlide.title}</Title>
                <SubTitleWrapper>
                  <p>{newItemSlide.subTitle}</p>
                  <span>
                    {index + 1}/ {newSlideItem.length}
                  </span>
                </SubTitleWrapper>
              </SliderBarTextArea>
            </SliderWrapper>
          );
        })}
      </Slider>
      <Article>
        <NewThemeTitleWrapper>
          <NewThemeSubTitle>추천 신규 테마</NewThemeSubTitle>
          <NewThemeTitle>초록방학</NewThemeTitle>
        </NewThemeTitleWrapper>
        <NewThemeList>
          {newThemeList.map((newThemeItem, index) => {
            return (
              <NewTheme>
                <img width="100%" src={newThemeItem.url} alt="" />
                <ItemTitlewrapper>
                  <ItemTitle>{newThemeItem.itemTitle}</ItemTitle>
                  <IoBagOutline size="24" color="#777777" />
                </ItemTitlewrapper>
                <ItemTitle price>
                  {newThemeItem.price.toLocaleString()}원
                </ItemTitle>
              </NewTheme>
            );
          })}
        </NewThemeList>
        <MoreItemBtn>더보기 +</MoreItemBtn>
      </Article>
      <NewProductsItem />
      <Footer />
    </>
  );
}

export default New;
