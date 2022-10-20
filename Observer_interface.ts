import NewsLetterInterface from "./Newsletter_interface";

export default interface Observer {
    update(observer: NewsLetterInterface) : any;
};