import React from "react";
import { teams } from "../../contexts/teamsData"; // teams 데이터를 불러옴
import Button from "./Button";

// 카테고리 선택 컴포넌트
const CommuSubCategory = ({ category, setCategory }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", // 줄 바꿈 허용
        justifyContent: "center",
        gap: "10px", // 버튼 사이의 간격
        marginBottom: "20px",
        width: "750px", // 전체 카테고리 박스의 고정 너비
      }}
    >
      {teams.map((team) => (
        <Button
          key={team.value} // 팀의 고유값으로 버튼에 key 설정
          className={`team-btn ${category === team.value ? "active" : ""}`} // 현재 선택된 카테고리에 active 클래스 부여
          onClick={() => setCategory(team.value)} // 클릭 시 카테고리 업데이트
          $buttonType="com-sub-category"
          $selected={category === team.value}
        >
          {team.value === "%25" ? (
            // '전체'일 때는 이미지 없이 텍스트만 렌더링
            <div>{team.label}</div>
          ) : (
            <>
              {/* team.logo가 있을 경우에만 이미지 렌더링 */}
              {team.logo && (
                <img
                  src={team.logo}
                  alt={team.label}
                  style={{ marginRight: "4px" }} // 로고와 이름 사이 간격
                />
              )}
              <div>{team.label}</div> {/* 팀 이름 텍스트 표시 */}
            </>
          )}
        </Button>
      ))}
    </div>
  );
};

export default CommuSubCategory;
