import NewsLetterInterface from "./Newsletter_interface";

export default interface ClientInterface {
    name: String;
    age: Number;
    messages: String[];

    update(message: String) : any;
};