import {FC, HTMLProps} from 'react';
import {classNames} from "@/helpers";
import cls from './FAQ.module.scss';
import {Arrow} from "@/component/svg";

interface FaqProps extends HTMLProps<HTMLDivElement> {
    className?: string;
}

const faqSection: FAQData[] = [
    {
        question: 'Парфуми та косметика за доступними цінами',
        answer: 'Lorem ipsum dolor sit amet consectetur. Euismod in hendrerit cursus enim metus. Quisque tempor quis in placerat sit ornare malesuada mattis eu. At eget at facilisis sed. Sit mauris dolor nam varius eget ut sodales felis. Neque sem rutrum rhoncus mattis vitae commodo volutpat semper. A mi arcu in eu quis nibh et vulputate pellentesque. Pretium ultrices praesent pulvinar sed blandit ullamcorper ornare viverra.'
    },
    {
        question: 'Декоративна косметика та засоби для догляду',
        answer: 'Lorem ipsum dolor sit amet consectetur. Euismod in hendrerit cursus enim metus. Quisque tempor quis in placerat sit ornare malesuada mattis eu. At eget at facilisis sed. Sit mauris dolor nam varius eget ut sodales felis. Neque sem rutrum rhoncus mattis vitae commodo volutpat semper. A mi arcu in eu quis nibh et vulputate pellentesque. Pretium ultrices praesent pulvinar sed blandit ullamcorper ornare viverra.'
    },
    {
        question: 'Чому обирають саме нас?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Euismod in hendrerit cursus enim metus. Quisque tempor quis in placerat sit ornare malesuada mattis eu. At eget at facilisis sed. Sit mauris dolor nam varius eget ut sodales felis. Neque sem rutrum rhoncus mattis vitae commodo volutpat semper. A mi arcu in eu quis nibh et vulputate pellentesque. Pretium ultrices praesent pulvinar sed blandit ullamcorper ornare viverra.'
    },
    {
        question: 'Каталог парфумерії інтернет-магазину',
        answer: 'Lorem ipsum dolor sit amet consectetur. Euismod in hendrerit cursus enim metus. Quisque tempor quis in placerat sit ornare malesuada mattis eu. At eget at facilisis sed. Sit mauris dolor nam varius eget ut sodales felis. Neque sem rutrum rhoncus mattis vitae commodo volutpat semper. A mi arcu in eu quis nibh et vulputate pellentesque. Pretium ultrices praesent pulvinar sed blandit ullamcorper ornare viverra.'
    },
];

const Faq: FC<FaqProps> = ({className, ...otherProps}) => {
    return (
        <section className={classNames(cls.faqSection, [className])} {...otherProps}>
            <h5 className={cls.title}>
                Інтернет магазин косметики та парфумерії Sharm Beauty
            </h5>
            <ul className={cls.listOfAnsw}>
                {faqSection.map(({question, answer}) =>
                    <li key={question} className={cls.qAndA}>
                        <h6 className={cls.question}>
                            {question}
                        <Arrow className={cls.arrow} width='24px' height='24px' />
                        </h6>
                        <p className={cls.answer}>
                            {answer}
                        </p>
                    </li>
                )}
            </ul>
        </section>
    );
}

export default Faq;