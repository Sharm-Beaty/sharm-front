export interface AdvertisingItemProps {
    id: number,
    title: string,
    subTitle: string,
    imgUrl: string
}

export const mockAds: AdvertisingItemProps[] = [
    {
        id: Math.random(),
        title: 'Найкращі пропозиціїцього літа',
        subTitle: 'для вашої краси',
        imgUrl:'/banner.jpg'
    },
]