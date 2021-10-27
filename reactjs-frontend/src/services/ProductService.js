import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8081/api/v1/products";

class ProductService{
    
    getProduct(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createProduct(product){
        return axios.post(PRODUCT_API_BASE_URL+'/addproduct',product);
    }

    getProductById(id){
        return axios.get(PRODUCT_API_BASE_URL + '/id/' + id)
    }

    updateProduct(product, id){
        return axios.put(PRODUCT_API_BASE_URL+ '/update/' + id, product)
    }

    deleteProduct(id){
        return axios.delete(PRODUCT_API_BASE_URL+ "/delete/" +id);
    }
}
export default new ProductService()