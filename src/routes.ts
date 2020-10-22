import { Router } from 'express';
import ProductController from './controllers/ProductController';


const routes = Router();

routes.get('/produtos', ProductController.index);
routes.post('/produtos', ProductController.create);
routes.get('/produto/:id', ProductController.show);   
routes.get('/produtos/:name', ProductController.showName); 

export default routes;