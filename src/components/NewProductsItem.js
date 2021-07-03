import React from "react";
import { newProductsItem } from "../utils/data";
import { IoBagOutline } from "react-icons/all";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const NewProductsWrpper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`;

const ProductsItem = styled.li`
  width: 275px;
  margin-bottom: 20px;
`;

const TitleWrapper = styled.div`
  padding-top: 70px;
  padding-left: 20px;
  border-top: 10px solid rgb(229, 229, 229);
`;

const SubTitle = styled.p`
  color: #9a9a9e;
  font-size: 18px;
`;

const Title = styled.p`
  font-size: 32px;
`;

const ItemTitlewrpper = styled.div`
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

function NewProductsItem() {
  return (
    <>
      <TitleWrapper>
        <SubTitle>오늘 업데이트 했어요</SubTitle>
        <Title>새로나온 친구들</Title>
      </TitleWrapper>
      <NewProductsWrpper>
        {newProductsItem.map((productItem, index) => {
          return (
            <Link key={index} to={`/detail/${index}`}>
              <ProductsItem>
                <img width="100%" src={productItem.url} alt="" />
                <ItemTitlewrpper>
                  <ItemTitle>{productItem.itemTitle}</ItemTitle>
                  <IoBagOutline size="24" color="#777777" />
                </ItemTitlewrpper>
                <ItemTitle price>
                  {productItem.price.toLocaleString()}원
                </ItemTitle>
              </ProductsItem>
            </Link>
          );
        })}
      </NewProductsWrpper>
    </>
  );
}

export default NewProductsItem;
