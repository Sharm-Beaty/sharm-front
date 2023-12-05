'use client';
import React from 'react';
import styled from "styled-components";
import {AdvertisingComponent} from "@/component/Advertising/AdvertisingComponent/AdvertisingComponent";
import {AdvertisingItemProps} from "@/mock/mockForAdvertisingBlock";

export interface AdvertisingBlockProps {
    advertisings: Array<AdvertisingItemProps>
}

export const AdvertisingBlock = (props: AdvertisingBlockProps) => {

    return (
        <StyledSection id={'advertising'}>
            {props.advertisings.map(item => <AdvertisingComponent key={item.id}
                                                            id={item.id}
                                                            title={item.title}
                                                            subTitle={item.subTitle}
                                                            imgUrl={item.imgUrl}/>)}
        </StyledSection>
    );
};
const StyledSection = styled.section`
  max-width: 1750px;
  width: 100%;
  outline: 1px solid red;
`