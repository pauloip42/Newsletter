import NewsLetterInterface from "./Newsletter_interface";
import Observer from "./Observer_interface";

export default class ObserverOne implements Observer {
    update(observer: NewsLetterInterface) {
        console.log("Observer 1 updated");
    };
};