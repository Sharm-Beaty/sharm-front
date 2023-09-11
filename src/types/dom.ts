export const getTouchEventData = (
    e:
        | TouchEvent
        | MouseEvent
        | React.TouchEvent<HTMLDivElement>
        | React.MouseEvent<HTMLDivElement>
) => {
    return "changedTouches" in e ? e.changedTouches[0] : e;
};
