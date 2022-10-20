import Observer from "./Observer_interface";

export default interface NewsLetterInterface {
    observers: Observer[];

    subscribe(o: Observer) : any;
    unsubscribe(o: Observer): any;

    publish() : any;
};