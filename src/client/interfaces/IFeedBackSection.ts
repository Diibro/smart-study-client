import ITestimony from "./ITestimony";

export default interface IFeedBackSection {
     title:string,
     count?:number;
     titleIcon:string,
     testimonies: ITestimony[]
}