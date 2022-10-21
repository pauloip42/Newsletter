import { Router } from 'express';
import NewsLetter from '../services/Newsletter';

const publishRoutes = Router();

publishRoutes.post('/publish', (req, res) => {
    const message = req.body.message;

    const newsletter = NewsLetter.getInstance();
    newsletter.publish(message);

    res.status(200);
    res.send();
});

export default publishRoutes;