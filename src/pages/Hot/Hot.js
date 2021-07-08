import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import PictureList from "./PictureList";
import styled from "styled-components";

const EventText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50%;
  font-size: 50px;
`;

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`에러 타입: ${action.type}`);
  }
}

function Hot() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchImage = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random",
        {
          params: {
            client_id: "esl5_ixjBJYerXM3rdUb9bLeJ2ofREeqqOgYmiYq9wg",
            count: 30,
          },
        }
      );
      dispatch({
        type: "SUCCESS",
        data: response.data.map(image => {
          return image.urls.small;
        }),
      });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const { loading, data, error } = state;
  if (loading) return <EventText>🚴‍♂️🚴🚴‍♂️🚴🚴‍♂️로딩중🚴‍♂️🚴🚴‍♂️🚴🚴‍♂️</EventText>;
  if (error) return <EventText>💣💣에러 발생💣💣</EventText>;
  if (!data) return null;

  return (
    <>
      <Header />
      <Nav />
      <PictureList data={data} />
    </>
  );
}

export default Hot;
