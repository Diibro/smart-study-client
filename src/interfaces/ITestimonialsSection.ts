import ITestimony from "./ITestimony";

export default interface ITestimonialsSection {
     title?: string,
     testimonies: ITestimony[],
     titleIcon?:string
}