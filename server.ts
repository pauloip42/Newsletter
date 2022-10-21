import httpServer from './config/server/serverHttp';
import NewsLetter from './services/Newsletter';

httpServer.listen(3000, () => {
    console.log('Server started at port 3000');
    const newsletter = NewsLetter.getInstance();
});