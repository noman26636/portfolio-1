import React from 'react'
import Product from './Product'
import "./ProductList.css"
import {products} from "../data"


function ProductList() {
    return (
        <div className='product-list'>
            <div className='pl-texts'>
                <h1 className='pl-title'>Create & Inspire</h1>
            </div>
            <div className='pl-list'>
             {products.map((item)=>(

            <Product key={item.id} img={item.img} link={item.link} />

             ))}   
            </div>
        </div>
    )
}

export default ProductList
