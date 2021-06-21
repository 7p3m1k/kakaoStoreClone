import React from "react";
import styled from "styled-components";

const CharacterWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 68px;
`;

const Name = styled.div`
  text-align: center;
  font-size: 16px;
  white-space: nowrap;
  margin-top: 10px;
`;

const Character = styled.li`
  width: 68px;
  margin: 10px;
`;

function CharacterList() {
  return (
    <>
      <CharacterWrapper>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/Ryan_71_color_210303.png" />
          <Name>라이언</Name>
        </Character>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/Apeach_71_color_210303.png" />
          <Name>어피치</Name>
        </Character>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/Muzi_71_color_210303.png" />
          <Name>무지</Name>
        </Character>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/Frodo_71_color_210303.png" />
          <Name>프로도</Name>
        </Character>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/Neo_71_color_210303.png" />
          <Name>네오</Name>
        </Character>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/Tube_71_color_210303.png" />
          <Name>튜브</Name>
        </Character>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/Jay-Z_71_color_210303.png" />
          <Name>제이지</Name>
        </Character>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/Con_71_color_210303.png" />
          <Name>콘</Name>
        </Character>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/Choonsic_71_color_210303.png" />
          <Name>춘식</Name>
        </Character>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/Jordy_71_color_210303.png" />
          <Name>죠르디</Name>
        </Character>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/Scappy_71_color_210303.png" />
          <Name>스카피</Name>
        </Character>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/Angmond_71_color_210303.png" />
          <Name>앙몬드</Name>
        </Character>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/PendaJr_71_color_210303.png" />
          <Name>팬다주니어</Name>
        </Character>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/Kereberony_71_color_210303.png" />
          <Name>케로&베로니</Name>
        </Character>
        <Character>
          <Image src="https://t1.daumcdn.net/friends/prod/category/Kumdori_71_color_210303.png" />
          <Name>꿈돌이</Name>
        </Character>
      </CharacterWrapper>
    </>
  );
}

export default CharacterList;
