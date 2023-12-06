'use client'
import styled from "styled-components";
import {font} from "@/component/Advertising/Common";

export const Button =styled.button`
  display: block;
  margin-left: 50px;
  margin-top: 50px;
  width: 330px;
  padding: 10px;
  ${font({family: 'Roboto', weight: 600, color: '#FFF', fmax: 14, fmin: 10})};
  line-height: 150%; /* 21px */
  background: #E56466;
  border: none;
  text-transform: uppercase;
  
  @media screen and (max-width: 576px){
    display: none;
  }
`
