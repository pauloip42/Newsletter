import { Router } from 'express';
import Client from '../services/Client';
import NewsLetter from '../services/Newsletter';

const subscribeRoutes = Router();

subscribeRoutes.post('/subscribe', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    const newClient = new Client(name, age);

    const newsletter = NewsLetter.getInstance();
    newsletter.subscribe(newClient);

    res.status(200);
    res.send();
});

export default subscribeRoutes;