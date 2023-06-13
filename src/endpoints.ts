// src/endpoints.ts
import Endpoint from '@mongez/http';
import { useEffect, useState } from 'react';

export const endpoint = new Endpoint({
 

    baseURL: 'https://dummyjson.com/',
});
// console.log(endpoint.defaults.baseURL)

const resData = endpoint.get('products').then(response =>{return response.data.products} )
    console.log(resData,"ehbabba")
console.log(typeof(resData))

export const ShowRes = () =>{
    resData.then((a)=>{
        console.log("AAA",a)
    }) 
}


ShowRes()