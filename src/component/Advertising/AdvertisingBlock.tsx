'use client';
import React from 'react';
import {AdvertisingComponent} from "@/component/Advertising/AdvertisingComponent/AdvertisingComponent";
import {AdvertisingItemProps} from "@/mock/mockForAdvertisingBlock";
import {Slider} from "@/component/Advertising/Slider/Slider";
import "./AdvertisingBlock.scss";

export interface AdvertisingBlockProps {
    advertisings: Array<AdvertisingItemProps>
}

export const AdvertisingBlock = (props: AdvertisingBlockProps) => {

    return (
        <section className={'advertisingBlock'} id={'advertising'}>
            <Slider items={props.advertisings.map(item => <AdvertisingComponent key={item.id}
                                                                                id={item.id}
                                                                                title={item.title}
                                                                                subTitle={item.subTitle}
                                                                                imgUrl={item.imgUrl}/>)}/>
        </section>
    )
};