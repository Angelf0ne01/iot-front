import React from "react";
import styled from "@emotion/styled";
import { AccountCircle } from "@mui/icons-material";

const Carta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  height: 200px;
  border: 1px solid #ececec;
  margin: 20px;
  margin-left: 0px;

  &:hover {
    cursor: pointer;
    border: 1px solid #15e7d2;
    box-shadow: 0px 13px 20px rgba(210, 202, 202, 0.7);
  }
`;

const Title = styled.h1`
  margin: 0px;
  text-align: center;
  font-weight: 400;
`;

const Description = styled.span`
  text-align: center;
  font-weight: 300;
  color: #c3c3c3;
`;

const Icon = styled.div`
  text-align: center;
`;

interface Props {
  id: string;
  title: string;
  description: string;
  onClick: (id: string) => void;
}

export default function Card({ title, description, id, onClick }: Props) {
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <Carta onClick={handleOnClick}>
      <Icon>
        <AccountCircle />
      </Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Carta>
  );
}
