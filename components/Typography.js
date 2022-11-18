import styled, { css } from "styled-components";
//LESS PREFFERED APPROACH
export const H1 = styled.h1``;

//BETTER APPROACH
// export const Typography = styled.div`
// ${(props) => props.level === 1 ? css`
// color: red;
// font-size: 35px;
// `
// : null}`;
export const Text = styled.div`
${(props) => props.theme.media.mobile}{
    //Enter media queries for mobile here
}
${(props) => props.theme.media.custom(540)}{
    //Enter media queries for custom here
}
${(props) => props.theme.media.custom(540)}{
    //Enter media queries for custom here
}
${({level}) => {
    switch (level) {
        case 1:
            return css`
            color: red;
            font-size: 35px;
            `;
        case 2:
        return css`
        color: red;
        font-size: 30px;
        `
        case 3:
        return css`
        color: red;
        font-size: 25px;
        `
        case 4:
        return css`
        color: red;
        font-size: 20px;
        `
        case 5:
        return css`
        color: red;
        font-size: 15px;
        `
        // case "paragraph":
        // return css`
        // font-weight: 500;
        // font-size: 33px;
        // line-height: 1;
        // letter-spacing: -0.06345px;
        // `
        // case "secondary-paragraph":
        // return css`
        // font-weight: 500;
        // font-size: 33px;
        // line-height: 1;
        // letter-spacing: -0.06345px;
        // `
        default:
            break;
    }
}}
${({ fontFamily }) => {
    switch (fontFamily) {
        case "primary":
        return css`
            font-family: "Poppins";
        `;
        case "secondary":
        return css`
            font-family: "Roboto";
        `;
        default:
        return css`
            font-family: "Poppins";
        `;
    }
}};
`