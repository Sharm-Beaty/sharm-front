export const Elipse = ({width = "7", height = "6", fill = "none"}) => (
    <svg
        className="elipse-svg"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 7 6"
        fill={fill}
    >
        <circle cx="3.5" cy="3" r="2.75" stroke="#BDBDBD" strokeWidth="0.5" />
    </svg>
);
