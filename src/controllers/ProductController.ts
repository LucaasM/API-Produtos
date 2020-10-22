import {Request, Response} from 'express';


import { getRepository } from 'typeorm';
import Product from '../models/Product';

export default {
    async index (req: Request, res: Response) {
        const productRepository = getRepository(Product);

        const products = await productRepository.find();
    
        return res.status(201).json(products)   
    },

    async create (req: Request, res: Response) {
        const { name, tag, price, amount, dueDate } = req.body;

        const productRepository = getRepository(Product);

        let data = {
            name,
            tag,
            price,
            amount,
            dueDate
        }

   
        const product = productRepository.create(data);

        await productRepository.save(product);
        
        return res.status(201).json(product);
        
        
    },

    async show (req: Request, res: Response) {

        const id = req.params;

        const productRepository = getRepository(Product);

        const product = await productRepository.findOne(id);

        return res.status(200).json(product);
    },

    async showName(req: Request, res: Response) {
        const { name } = req.params;

        const product = await getRepository(Product)
                        .createQueryBuilder('product')
                        .where('product.name = :name ', {name: name})
                        .getMany();
        
        
        return res.status(200).json(product);
    }
}