'use client';
import React from 'react';
import styled from "styled-components";
import {Button} from "@/component/Advertising/Button";
import {AdvertisingItemProps} from "@/mock/mockForAdvertisingBlock";
import {font} from "@/component/Advertising/Common";

export const AdvertisingComponent = ({title, subTitle, imgUrl}: AdvertisingItemProps) => {
    return (
        <StyledAdvertising src={imgUrl}>
            <BannerContent>
                <Title>
                    <StyledSpan>{title.slice(0, 19)}</StyledSpan>
                    <StyledSpan>{title.slice(19, title.length)}</StyledSpan>
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

  max-width: 1300px;
  width: 100%;
  min-height: 530px;
`
const BannerContent = styled.div`
  padding: 0 0 0 50px;
`
const Title = styled.h1`
  position: relative;
  padding-top: 140px;
  padding-left: 50px;
  ${font({family: 'Roboto', weight: 700, color: '#E56466', fmax: 40, fmin: 32})};
  text-shadow: 0 4px 4px #828282;
  text-transform: uppercase;
  @media screen and (max-width: 576px) {
    position: absolute;
    bottom: 63px;
    right: 25px;
    text-align: right;
  }

`
const StyledSpan = styled.span`
  padding-bottom: 18px;
  display: block;
  @media screen and (max-width: 576px) {
    padding-bottom: 0;
  }
`
const SubTitle = styled.span`
  position: relative;
  padding-left: 50px;
  margin-bottom: 50px;
  ${font({family: 'Roboto', weight: 400, color: '#363636', fmax: 36, fmin: 20})};
  text-align: center;

  @media screen and (max-width: 576px) {
    position: absolute;
    bottom: 95px;
    right: 25px;
    ${font({family: 'Roboto', weight: 600, color: '#363636', fmax: 24, fmin: 20})};
    text-transform: uppercase;
  }

`