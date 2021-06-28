import React, { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const { Kakao } = window;

const LoginLink = styled.button`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
`;

function SocialLogin() {
  const history = useHistory();
  const kakaoLoginClickHandler = () => {
    console.log("으악", Kakao.isInitialized());
    Kakao.Auth.login({
      success: function (authObj) {
        console.log("시벌", authObj);
        axios("http://localhost:3000/oauth", {
          method: "POST",
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem("Kakao_token", res.access_token);
            if (res.access_token) {
              console.log("민규의 클론 공부 kakao 로그인 성공!");
              history.push("/new");
            }
          });
      },
      fail: function (err) {
        console.log("에러", JSON.stringify(err));
        alert("로그인실패!!");
      },
    });
  };
  return (
    <LoginLink onClick={kakaoLoginClickHandler}>
      <u>로그인</u>이 필요해요 !
    </LoginLink>
  );
}

export default SocialLogin;
