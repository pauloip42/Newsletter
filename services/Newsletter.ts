import NewsLetterInterface from "../ports/usecases/Newsletter_interface";
import Client from "../ports/usecases/Client_interface";

export default class NewsLetter implements NewsLetterInterface {
    private static newsLetterInstance: NewsLetter;
    clients: Client[];

    private constructor() {
        this.clients = [];
    };

    // singleton
    public static getInstance(): NewsLetter {
        if (!NewsLetter.newsLetterInstance) {
            NewsLetter.newsLetterInstance = new NewsLetter();
            console.log('Nova Newsletter criada!')
        }
        return NewsLetter.newsLetterInstance;
    };

    // Interface implementation
    subscribe(client: Client) {
        console.log(`User ${client.name} subscribed to the newsletter!`);
        this.clients.push(client);
    };

    unsubscribe(client: Client) {
        const index: number = this.clients.indexOf(client);

        if (index > -1) {
            this.clients.splice(index, 1);
            return;
        };
    };

    publish(message: String) {
        this.clients.forEach((client) => {
            client.update(message);
        });
    };
}