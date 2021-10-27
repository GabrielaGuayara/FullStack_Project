import React from 'react'
import { useEffect } from 'react'

export const Filterdata = ({searchProducts, searchInp, setProducts}) => {

   // const [ProductBrand, setProductByBrand]= useState([])

    const gen = [
        {
            name: "woman"
        },
        {
            name: "man"
        }
        
    ]

    const fetchBrandData = async(gen)=>{
        const resp = await fetch(`http://localhost:8081/api/v1/products/gen/${gen}`)
        const data = await resp.json()
        setProducts(data)
        console.log(data)
    }

    useEffect(()=>{
       fetchBrandData()
    },[])

    return (
        <div className="container">
             <div className="row">
                <div className="text-center py-5">
                    <input type="search" name="search" id="search"
                    className="w-50 m-3 searchbar"
                    placeholder="search by product name" value={searchInp} 
                    onChange={(e)=>searchProducts(e.target.value)}
                     />
                    <select name="select" id="select"
                    className="options"
                    value={gen.name}
                    onChange={(e)=>fetchBrandData(e.target.value)}> 
                        <option value="woman">Woman</option>
                        <option value="man">Man</option>
                    </select>
            </div>
            </div>
        </div>
    )
}
