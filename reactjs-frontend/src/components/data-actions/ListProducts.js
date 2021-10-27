import React, { Component } from 'react'
import ProductService from '../../services/ProductService';
import { Navbar } from '../nav-comps/Navbar';
import '../CSS/Data.css'
import { AiFillEdit, AiFillDelete} from "react-icons/ai";
import { GrView} from "react-icons/gr";
import { IoCreateSharp } from "react-icons/io5";

// import { useHistory } from 'react-router'

// import {Image} from "react-bootstrap";

export default class ListProducts extends Component {
    constructor(props){
        super(props)

        this.state ={
            products:[]
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct=this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.viewProduct = this.viewProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProduct().then((resp)=>{
            this.setState({products:resp.data});
        });
    } 

    addProduct(){
        this.props.history.push('/add-product')
    }

    
    editProduct(id)
    {
       this.props.history.push(`/update-product/${id}`);
       
    }

    deleteProduct(id)
    {
       this.props.history.push(`/delete-product/${id}`);
       
    }
    viewProduct(id)
    {
       this.props.history.push(`/view-product/${id}`);
       
    }

    render() {
        return (
            <div className="main-list">
                <Navbar/>
                <div className="container list-prod">  
                <button className = "btn btn-primary mt-4" onClick = {this.addProduct}><IoCreateSharp/> Add Product</button>
                <h2 className="text-center"> Products List</h2>
                <div className="row">
                <table className="table table striped table bordered">
                    <thead>
                        <tr>
                            <th >Product ID</th>
                            <th >Product Name</th>
                            <th >Description</th>
                            <th >Brand</th>
                            <th >Price</th>
                            <th >For</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(
                                p=>
                                <tr key ={p.id}>
                                    <td>{p.id}</td>
                                    <td> <img src={p.img}  className="roundedCircle" width="40" height="40" alt ="img" />{p.name}</td>
                                    <td>{p.descp}</td>
                                    <td>{p.brand}</td>
                                    <td>{p.price}$</td>
                                    <td>{p.gen}</td>
                                    <td>
                                            <button onClick={() =>this.editProduct(p.id)} className="btn btn-primary"><AiFillEdit/></button> 
                                             <button onClick={() =>this.deleteProduct(p.id)} className="btn btn-danger"><AiFillDelete/></button> 
                                            <button onClick={() =>this.viewProduct(p.id)} className="btn btn-primary"><GrView/></button> 
                                    </td>
                                    </tr>
                                )    
                        }

                    </tbody>

                </table>

                
                </div>
                </div>
                </div>
        )
    }
}
