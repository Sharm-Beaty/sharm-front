'use client';
import React from 'react';
import styled from "styled-components";
import {Button} from "@/component/Advertising/Button/Button";
import {AdvertisingItemProps} from "@/mock/mockForAdvertisingBlock";

export const AdvertisingComponent = ({title, subTitle}: AdvertisingItemProps) => {
    return (
        <StyledAdvertising>
            <BannerContent>
                <Title>
                    <StyledSpan>Найкращі пропозиції</StyledSpan>
                    <StyledSpan>цього літа</StyledSpan>
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
  background-image: url(/images-for-ads/banner.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid red;
`
const BannerContent = styled.div`
  padding: 50px 500px 170px 50px;

`
const Title = styled.h1`
  padding-top: 140px;
  padding-left: 50px;
  color: #E56466;
  text-shadow: 0px 4px 4px #828282;
  font-family: Roboto;
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
  font-family: Roboto;
  font-size: 36px;
  font-weight: 400;
`