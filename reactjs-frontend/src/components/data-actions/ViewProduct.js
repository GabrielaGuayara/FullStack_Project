import React, { Component } from 'react'
import ProductService from '../../services/ProductService';
import { BiArrowBack } from "react-icons/bi";

export default class ViewComponent extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 products:{}

             }
             
    }//constructor

     componentDidMount()
     {
        ProductService.getProductById(this.state.id).then((res) =>{
            this.setState({products:res.data})
         });
     }
     
    backDatabase(){
        this.props.history.push('/products')
    }
    
    render() {
        return (
            <div className="main-comp2">
            <div className="container">
                <div className="row">
                   <div className="card col-md-6 offset-md-3 offset-md-3">
                       <h3 className="text-center">Product Details</h3>
                       <div className="card-body">
                           <form>  
                               <div className="form-group">
                                <label>Name: </label>
                                <input placeholder={this.state.products.name} readOnly ={true} name="name" className="form-control"
                 />
                             </div>   
                             <div className="form-group">
                                <label>Description: </label>
                                <input placeholder={this.state.products.descp} readOnly ={true} name="descp" className="form-control"
                                    />
                             </div>   
                             <div className="form-group">
                                <label>Price: </label>
                                <input placeholder={this.state.products.price} readOnly ={true} name="price" className="form-control"
                                    />
                             </div>   
                              <div className="form-group">
                              <label>Brand: </label>
                              <input placeholder={this.state.products.brand}  readOnly ={true} name="brand" className="form-control"
                                 />
                              </div> 
                              <div className="form-group">
                              <label>For: </label>
                              <input placeholder={this.state.products.gen}  readOnly ={true} name="brand" className="form-control"
                                 />
                              </div>
                              <br/>
                                <label>Image: </label>
                                    <div className="form-group text-center">
                                    <img src={this.state.products.img}  className="roundedCircle w-50"  alt ="img" /> 
                                    </div> 
                              <div className="text-center py-2">
                                    <button className="btn btn-success"onClick={this.backDatabase.bind(this)}> <BiArrowBack/> Back</button>
                                    </div>  
                                              
                           </form>
                       </div>
                   </div>
                </div>
            </div>
         </div>
        )
    }
}
