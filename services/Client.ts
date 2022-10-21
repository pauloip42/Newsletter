import NewsLetterInterface from "../ports/usecases/Newsletter_interface";
import ClientInterface from "../ports/usecases/Client_interface";

export default class Client implements ClientInterface {
    name: String;
    age: Number;
    messages: String[];

    constructor(name: String, age: Number) {
        this.name = name;
        this.age = age;
        this.messages = [];
    };

    update(message: String) {
        console.log(`${this.name} recebeu a atualização: ${message}`);
        this.messages.push(message);
    };

    showMessages() {
        this.messages.forEach((message) => {
            console.log('Mensagem: ', message);
        });
    };
};