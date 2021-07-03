import React, { useState } from "react";
import styled from "styled-components";
import DetailHeader from "./DetailHeader";
import { newProductsItem } from "../../utils/data";
import { useParams } from "react-router-dom";
import { HiShare } from "react-icons/all";

const DetailTitle = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    border: 1px solid gray;
    border-radius: 50%;
    line-height: 1px;
    padding: 8px;
  }
`;

const DetailPrice = styled.p`
  font-size: 21px;
`;

function Detail() {
  let [items, setItems] = useState(newProductsItem);
  let { id } = useParams();

  let match = items.find(function (newProductsItem) {
    if (newProductsItem.id == id) return true;
  });

  return (
    <>
      <DetailHeader />
      <img width="100%" src={match.url} alt="" />
      <DetailTitle>
        <b>{match.itemTitle}</b>
        <div>
          <HiShare size="26px" />
        </div>
      </DetailTitle>
      <DetailPrice>{match.price.toLocaleString()}원</DetailPrice>
    </>
  );
}

export default Detail;
