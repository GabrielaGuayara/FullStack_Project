import React, { Component } from 'react'
import ProductService from '../../services/ProductService';

export default class DeleteProduct extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 name: '',
                 descp:'',
                 price:'',
                 brand:'',
                 img:'',
                 gen:''
             }
     
        
        this.deleteProduct = this.deleteProduct.bind(this);

    }//constructor

     componentDidMount()
     {
        ProductService.getProductById(this.state.id).then((res) =>{
          let product = res.data;
          this.setState({name: product.name,
                        descp:product.descp,
                        price: product.price,
                        brand: product.brand,
                        img: product.img,
                        gen: product.gen
                });
        });
           
     }
     
    

    
  deleteProduct = (e) => {
        e.preventDefault();
        let product={
            name: this.state.name,
           descp: this.state.descp,
           price: this.state.price,
           brand: this.state.brand,
           img: this.state.img ,
           gen: this.state.gen
        };

        console.log(product);
        ProductService.deleteProduct(this.state.id).then(res => {
            
            this.props.history.push('/products');
        })
      
        
    }

    cancel(){
        this.props.history.push('/products');
    }

    render() {
        return (
            <div className="main-comp2">
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Delete Product</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                   <label>Name: </label>
                                   <input placeholder="Name" readOnly ={true} name="name" className="form-control"
                                      value={this.state.name} />
                                </div>   
                                <div className="form-group">
                                   <label>Description: </label>
                                   <input placeholder="description" readOnly ={true} name="descp" className="form-control"
                                      value={this.state.descp}  />
                                </div>   
                                <div className="form-group">
                                   <label>Price: </label>
                                   <input placeholder="price" readOnly ={true} name="price" className="form-control"
                                      value={this.state.price}  />
                                </div>   
                                 <div className="form-group">
                                 <label>Brand: </label>
                                 <input placeholder="brand"  readOnly ={true} name="brand" className="form-control"
                                    value={this.state.brand}  />
                                 </div> 
                                 <div className="form-group">
                                   <label>For: </label>
                                   <input placeholder="gen" readOnly ={true} name="gen" className="form-control"
                                      value={this.state.gen}  />
                                </div> 
                                <br/>
                                <label>Image: </label>
                                    <div className="form-group text-center">
                                    <img src={this.state.img}  className="roundedCircle w-50"  alt ="img" /> 
                                    </div> 
                                    <div className="text-center py-2">
                                    <button className="btn btn-success" onClick={this.deleteProduct}> Delete </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button> 
                                    </div>                   
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}
