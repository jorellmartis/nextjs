import { createGlobalStyle } from "styled-components";
const customMediaQuery = (maxWidth, queryType = "max-width") =>
`@media (${queryType}: ${maxWidth}px)`;
const media = {
    custom: customMediaQuery,
    dekstop: customMediaQuery(922),
    tablet: customMediaQuery(768),
    mobile: customMediaQuery(576),
}
export const myAppTheme = {
    primaryColor: "#000000",
    secondary: "#ffffff",
    media
}
export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`

