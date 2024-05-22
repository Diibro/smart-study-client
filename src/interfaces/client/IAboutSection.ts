import IButton from "./IButton";
import IShowCase from "./IShowCase";

export default interface IAboutSection {
     title?: string,
     main_title?: string,
     message?: string,
     read_more?: IButton,
     image?: string,
     showCases?: IShowCase[],
     page?:string
}