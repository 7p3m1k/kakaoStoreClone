// import { useHistory } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const LoginLink = styled.button`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
`;

function SocialLogin() {
  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log(authObj);
        fetch(`http://localhost:3000/oauth/kakao`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authObj.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res.access_token) {
              alert("회원가입 하셨습니다!");
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };
  return (
    <LoginLink onClick={kakaoLogin}>
      <u>로그인</u>이 필요해요 !
    </LoginLink>
  );
}

export default SocialLogin;
