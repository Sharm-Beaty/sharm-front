type fontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    fmin?: number,
    fmax?: number
}
export const font = ({family, weight, color, lineHeight, fmin, fmax}: fontPropsType) => `
    font-family:${family || 'Roboto'};
    font-weight:${weight || 400};
    color:${color || '#E56466'};
    line-height:${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1300 - 360) * (${fmax} - ${fmin}) + ${fmin}px);

`
