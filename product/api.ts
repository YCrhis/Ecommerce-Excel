import {Product} from './types';
import axios from 'axios'
import Papa from 'papaparse'

export default {
    list:async():Promise<Product[]> => {
        return axios.get(
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpHW3vp1GvPCufcyjfZaaycvkzBlErI4lqksch7AWtA15KZp-v_L55dvSTPENaYtTPPeVZbscG5Lve/pub?gid=0&single=true&output=csv',
            {
                responseType:'blob'
            }
            ).then(response=>{
                return new Promise<Product[]>((resolve, reject)=>{
                    Papa.parse(response.data,{
                        header:true,
                        complete:(results) =>{
                            const products = results.data as Product[]
                            return resolve(
                                products.map(product=>({
                                ...product,
                                price:Number(product.price)
                            })))
                        },
                        error:(error)=>{
                            return reject(error.message)
                        }
                    });

                })
            });

    }
}