import { Invoice } from "../model/Invoice";

export const invoiceData:Invoice = {
    id: "001",
    company: {
        ruc: "1728963594001",
        name: "Clear Minds Consultores",
        address: {
            city: "Quito",
            principalStreet: "Juan Pablo Sanz",
            secondaryStreet: "Iñaquito",
            code: "N-57",
        }
    },
    customer: {
        id: "1712062585",
        name: "Jenny ",
        surname: "Rodriguez",
        address: {
            city: "Quito",
            principalStreet: "Tejar",
            secondaryStreet: "Cerro Narrio",
            code: "N-57",
        }
    
},
    items: [
        {
            id: 100,
            productId: {
             id: 500,
            name: "Papas rufles",
            price: 0.50,
            description: "las papas mas sabrosonas",
            category:{
                id: 1,
                name: "Snacks"
            }
            },
            quantity:23,
        },
        {
            id: 101,
            productId: {
             id: 50,
            name: "doritos ",
            price: 0.60,
            description: "De queso",
            category:{
                id: 2,
                name: "Snacks"
            }
            },
            quantity:50,
        },
        {
            id: 102,
            productId: {
             id: 580,
            name: "Kchitos",
            price: 0.30,
            description: "Para Kchudos",
            category:{
                id: 3,
                name: "Snacks"
            }
            },
            quantity:100,
        },
    ],
};