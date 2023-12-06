import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Slider.scss'
import {AdvertisingComponent} from "@/component/Advertising/AdvertisingComponent/AdvertisingComponent";

type SliderPropsType={
    items:AdvertisingComponent[]
}
export const Slider = (props:SliderPropsType) => (
    <div className={'slider'}>
        <AliceCarousel
            mouseTracking
            items={props.items}/>
    </div>)
