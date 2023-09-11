import "./Banner.scss";
import {Slider} from "../../../component/Slider";

const images = [
    {
        title: "image1",
        url: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
    },
    {
        title: "image2",
        url: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
    },
    {
        title: "image3",
        url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
    },
    {
        title: "image4",
        url: "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg",
    },
    {
        title: "image5",
        url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
];

export const Banner = () => {
    return (
        <div className="banner-container">
            <Slider data={images}>
                <>
                    <p className="bunner-text-1 mobile-only">Трендові товари</p>
                    <p className="bunner-text-2 mobile-only">літо 2023</p>

                    <p className="bunner-text-1 desktop-only">
                        Найкращі пропозиції цього літа
                    </p>
                    <p className="bunner-text-2 desktop-only">
                        для вашої краси
                    </p>
                    <button className="banner-button desktop-only">
                        <span className="banner-button-text ">Переглянути</span>
                    </button>
                </>
                <></>
            </Slider>
        </div>
    );
};
