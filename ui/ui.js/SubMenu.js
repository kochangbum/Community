import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SubMenuContainer = styled.div`
  font-family: "GongGothicMedium", sans-serif;
  font-size: 1rem;
  background-color: white;
  border-radius: 60px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 60px; // 부모 Navbar의 높이에 따라 위치 조정
  left: 150%; // 부모 요소의 가운데 위치
  transform: translateX(-50%); // 중앙 정렬을 위한 변환
  padding: 10px;
  z-index: 1;
  width: 20vw;
  display: ${(props) =>
    props.isVisible ? "flex" : "none"}; // display 속성으로 가시성 제어
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 7vh;
  // div {
  //   display: flex;
  //   // flex-direction: row;
  // }
`;

const SubMenuItem = styled(Link)`
  padding: 10px 20px;
  color: #2b2a2a;
  transition: color 0.3s;
  align-conetent: flex-start;

  &:hover {
    color: #d71e17;
  }
`;

const SubMenu = ({ subItems, isVisible }) => {
  if (!subItems || !Array.isArray(subItems)) {
    return null;
  }

  return (
    <SubMenuContainer style={{ display: isVisible ? "flex" : "none" }}>
      <div>
        {subItems.map((subItem, index) => (
          <SubMenuItem key={index} to={subItem.path}>
            {subItem.label}
          </SubMenuItem>
        ))}
      </div>
    </SubMenuContainer>
  );
};

export default SubMenu;
