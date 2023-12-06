'use client';
import React from 'react';
import styled from "styled-components";
import {Button} from "@/component/Advertising/Button";
import {AdvertisingItemProps} from "@/mock/mockForAdvertisingBlock";

export const AdvertisingComponent = ({title, subTitle,imgUrl}: AdvertisingItemProps) => {
    return (
        <StyledAdvertising src={imgUrl}>
            <BannerContent>
                <Title>
                    <StyledSpan>{title.slice(0,19)}</StyledSpan>
                    <StyledSpan>{title.slice(19,title.length)}</StyledSpan>
                </Title>
                <SubTitle>{subTitle}</SubTitle>
                <Button> Переглянути </Button>
            </BannerContent>
        </StyledAdvertising>
    );
};
type StyledAdvertisingType = {
    src: string
}
const StyledAdvertising = styled.div<StyledAdvertisingType>`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 24px;
`
const BannerContent = styled.div`
  padding: 50px 500px 170px 50px;

`
const Title = styled.h1`
  padding-top: 140px;
  padding-left: 50px;
  color: #E56466;
  text-shadow: 0 4px 4px #828282;
  font-family: Roboto sans-serif;
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;

`
const StyledSpan = styled.span`
  padding-bottom: 18px;
  display: block;
`
const SubTitle = styled.span`
  padding-left: 50px;
  margin-bottom: 50px;
  color: #363636;
  text-align: center;
  font-family: Roboto sans-serif;
  font-size: 36px;
  font-weight: 400;
`