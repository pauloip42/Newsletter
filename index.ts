import NewsLetter from "./Newsletter";
import ObserverOne from "./ObserverOne";

console.log('Creating Observer 1 and NewsLetter 1');

const observer1 = new ObserverOne();

const newsletter1 = new NewsLetter();

newsletter1.subscribe(observer1);

newsletter1.publish();