import React,{useState, useEffect} from 'react'
import { Filterdata } from './Filterdata'
import { ProductsHeader } from './ProductsHeader'

const URL = 'http://localhost:8081/api/v1/products'
const Displayproducts = () => {
    const [products, setProducts] = useState([])
    const[filter, setFilter] = useState([])
    const [SearchInp, setSearchInp] = useState("")

    const fetchProductsData = async() =>{
        const resp = await fetch(URL)
        const products = await resp.json()
        setProducts(products)
        //console.log(products)
    }

    useEffect(()=>{
        fetchProductsData()
    },[])

    const searchProducts = (value)=>{
        setSearchInp(value)

        if(SearchInp){
        const filterproducts = products.filter((name)=>(
            Object.values(name).join("").toLowerCase().includes(value.toLowerCase())
            ))
            setFilter(filterproducts)
        }else{
            setFilter(products)
        }
}


    return (
        <>
        <ProductsHeader/>
        <section className="py-5">
            <div className="container ">
                <Filterdata searchProducts={searchProducts} searchInp ={SearchInp} setProducts={setProducts}/>
                    { SearchInp.length >0 ? <div className="row text-center prod-cards">
                            {filter.map((p,i)=>{
                                    return <div className= "card col-md-3 mx-10 details" key={i}>
                                            <h5 className="mt-3">{p.name}</h5>
                                            <img className="card-img-top" src={p.img} alt="perfume"/>
                                            <div className="card-body">
                                                        <div className="card-text">
                                                            <p>Brand: { p.brand} </p>
                                                            <p>Descrption: { p.descp}</p> 
                                                            <p>Price: { p.price }$ </p>
                                                            <p>Genre: { p.gen } </p>
                                                        </div>
                                            </div>
                                        </div> 
                                }) }
                        </div>: <div className= "row text-center prod-cards">
                                    {products.map((p,i)=>{
                                        return<div className= "card col-md-3 mx-10 details" key={i}>
                                                    <h5 className="mt-3">{p.name}</h5>
                                                    <img className="card-img-top" src={p.img} alt="perfume"/>
                                                <div className="card-body">
                                                            <div className="card-text">
                                                            <p>Brand: { p.brand} </p>
                                                            <p>Descrption: { p.descp}</p> 
                                                            <p>Price: { p.price }$ </p>
                                                            <p>Genre: { p.gen } </p>
                                                            </div>
                                                </div>
                                                </div>
                                                }) }
                                        
                                </div>
                    }
                        </div>

        </section> 
    </>
    )
}

export default Displayproducts

