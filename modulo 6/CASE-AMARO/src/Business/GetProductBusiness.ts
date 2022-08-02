import GetProduct from "../Data/GetProductData"

const getProduct = new GetProduct()

export default class GetProductBusiness {


    DetailsProduct = async (nameInput: string) => {
        if (!nameInput) {
            throw new Error("Enter a Name");''   
        }

        const DataBandDetails = await getProduct.getDetails (nameInput)

        return DataBandDetails
    }


    
}

