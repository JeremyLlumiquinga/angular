import { Learningapp } from "../model/learningapp";


export const learningAppData: Learningapp = {
    id: 100,
    course: {
        id: 1,
        name: "Curso de Angular",
        student: [
            {
                id: 1,
                identification: 123456789,
                name: "Juan",
                surname: "Pérez",
            },
            {
                id: 2,
                identification: 1750128603,
                name: "Marta",
                surname: "Julia",
            },
            {
                id: 3,
                identification: 789456123,
                name: "Zoe",
                surname: "pepino",
            },
            {
                id: 4,
                identification: 741258963,
                name: "Angela",
                surname: "Juan",
            }
        ],
    },
    item: [
        {
            id: 1,
            identification: 123456789,
            name: "Juan",
            surname: "Pérez",
        },
        {
            id: 2,
            identification: 1750128603,
            name: "Marta",
            surname: "Julia",
        },
        {
            id: 3,
            identification: 789456123,
            name: "Zoe",
            surname: "pepino",
        },
        {
            id: 4,
            identification: 741258963,
            name: "Angela",
            surname: "Juan",
        }
    ]
};