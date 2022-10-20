import NewsLetterInterface from "./Newsletter_interface";
import Observer from "./Observer_interface";

export default class NewsLetter implements NewsLetterInterface {
    observers: Observer[];

    constructor(){
        this.observers = [];
    }

    
    subscribe(observer: Observer) {
        console.log("User subscribed to the newsletter");
        this.observers.push(observer);
    };

    unsubscribe(observer: Observer) {
        const index : number = this.observers.indexOf(observer);

        if(index > -1) {
            this.observers.splice(index, 1);
            return;
        };
    };

    publish() {
        this.observers.forEach((observer) => {
            observer.update(this);
        })
    };
}