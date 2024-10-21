import React from "react";
import styled from "styled-components";

// 모달 오버레이 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 모달 콘텐츠 스타일
const ModalContent = styled.div`
  background: #ffffff;
  padding: 30px 20px;
  border-radius: 30px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: ${(props) => (props.width ? props.width : "600px")};
  height: ${(props) => props.height || "auto"};
  overflow-y: auto;
  position: relative;
`;

// 모달 타이틀 스타일
const ModalTitle = styled.h3`
  font-size: 25px; /* 좀 더 큰 글씨로 설정 */
  font-weight: bold; /* 굵은 글씨 */
  margin-top: 10px;
  margin-bottom: 20px; /* 타이틀과 메시지 사이에 간격 추가 */
  color: #333;
  text-align: center; /* 가운데 정렬 */
`;

// 모달 메시지 스타일
const ModalMessage = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5; /* 줄 간격 설정 */
  padding: 20px; /* 메시지 내부 여백 설정 */
  text-align: center; /* 텍스트 가운데 정렬 */
  overflow-y: auto; /* 내용이 길 경우 스크롤 처리 */
`;

// 버튼 래퍼 스타일 (버튼을 하단에 고정)
const ModalButtonWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

// 확인 버튼 스타일
const ConfirmButton = styled.button`
 background-color: #FFc9c7;
  width: 72px;
  height: 43px;
  color:  #d71e17;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  }
`;

// 취소 버튼 스타일
const CancelButton = styled.button`
 background-color: #D2D2D2;
  width: 72px;
  height: 43px;
  color:  #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  }
`;

// 닫기 버튼 스타일
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;
`;

// 모달 컴포넌트 정의
const Modal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "확인",
  cancelText = "취소",
  width = "600px",
  height = "auto",
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent width={width} height={height}>
        <CloseButton onClick={onClose}>X</CloseButton>
        {title && <ModalTitle>{title}</ModalTitle>}
        {message && <ModalMessage>{message}</ModalMessage>}
        <ModalButtonWrapper>
          <ConfirmButton onClick={onConfirm}>{confirmText}</ConfirmButton>
          <CancelButton onClick={onClose}>{cancelText}</CancelButton>
          {/* <UserStopButton onClick={onStop}>{userStopText}</UserStopButton> */}
        </ModalButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
