import React from 'react'
import styled from "@emotion/styled"
import {AccountCircle} from '@mui/icons-material';

const Carta = styled.div`
  background-color: white;
  color: black;
  border-radius: 30px;
  margin: 10px;
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 30px;
  width: 270px;
  height: 330px;
  box-shadow: 0px 13px 20px rgba(0,0,0,0.7);
`

const Title = styled.h1`
  border: 2px solid black;
  padding: 10px;
  text-align: center;
`

const Icon = styled.div`
  text-align: center;
  margin-bottom: -18px;
  margin-top: 5px;
`

interface Props{
    title: string,
    description: string,
}

export default function Card({title,description} : Props){
return(
    <Carta>
        <Icon><AccountCircle/></Icon>
        <Title>{title}</Title>
        <p>{description}</p>
    </Carta>
)
}
