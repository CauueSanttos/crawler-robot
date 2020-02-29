import { Router } from 'express';

import CrawlerController from './app/controllers/CrawlerController';

import validateCrawlerStore from './app/validators/CrawlerStore';

const routes = new Router();

routes.post('/buscar', validateCrawlerStore, CrawlerController.store);

export default routes;
