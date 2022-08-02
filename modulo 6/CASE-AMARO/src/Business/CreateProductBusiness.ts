// import CreateProductData from '../Data/CreateProductData'
import { CreateProductData } from '../Data/CreateProductData'
import { createInput, ProductCreate } from '../Models/ProductCreate'
import { IdGenerate } from '../Services/idGenerate'

import {v4 as uuidv4} from 'uuid';


const idGenerator = new IdGenerate()
const createProductData = new CreateProductData()

export default class CreateProductBusiness {

    createBand = async (input: createInput) => {

        const { name, type, details, price } = input

        if (!name || !type || !details || !price) {
            throw new Error('Campos inválidos')
        }

        const id = idGenerator.generateId()

        const productCreate = new ProductCreate(
            id,
            name,
            type,
            details,
            price
        )
            console.log(productCreate)
        await createProductData.Create(productCreate)

    }
    
}