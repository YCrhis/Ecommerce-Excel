import { Supplier } from "./type"
import axios from "axios"
import Papa from 'papaparse'

export default {
    list: async (): Promise<Supplier[]> => {
        return axios.get(
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpHW3vp1GvPCufcyjfZaaycvkzBlErI4lqksch7AWtA15KZp-v_L55dvSTPENaYtTPPeVZbscG5Lve/pub?gid=1179378871&single=true&output=csv',
            {
                responseType: 'blob'
            }
        ).then(response => {
            return new Promise<Supplier[]>((resolve, reject) => {
                Papa.parse(response.data, {
                    header: true,
                    complete: (results) => {
                        const supli = results.data as Supplier[]
                        return resolve(
                            supli.map(supli => ({
                                ...supli,
                                price: Number(supli.clients)
                            })))
                    },
                    error: (error) => {
                        return reject(error.message)
                    }
                });

            })
        });

    }
}