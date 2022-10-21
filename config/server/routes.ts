import { Express } from 'express';

import subscribeRoutes from '../../routes/client.subscribe';
import publishRoutes from '../../routes/newsletter.publish';

export default (server: Express): void => {
    server.use('/api', subscribeRoutes);
    server.use('/api', publishRoutes);
};