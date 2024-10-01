const categorys = [
    { id: 1, name: 'Phone' },
    { id: 2, name: 'Tablet' },
    { id: 3, name: 'Computer' }
]

export const products = [
    {
        id: 1,
        title: 'Huawei Mate 50',
        categoryId: 1,
        shortDesc: '',
        price: 2500
    },
    {
        id: 2,
        title: 'Huawei Mate 50 pro',
        categoryId: 1,
        short_desc: '',
        price: 5000
    },
    {
        id: 3,
        title: 'Huawei Mate 50 pro max',
        categoryId: 1,
        short_desc: '',
        price: 6600
    },
    {
        id: 4,
        title: 'Huawei MatePad',
        categoryId: 2,
        short_desc: '',
        price: 2800
    },
    {
        id: 5,
        title: 'Huawei MatePad Pro',
        categoryId: 2,
        short_desc: '',
        price: 6600
    },
    {
        id: 6,
        title: 'Huawei MateBook 14 Pro',
        categoryId: 3,
        short_desc: '',
        price: 6500
    }
]

export function getProduct(id) {
    return products.find((product) => product.id === parseInt(id) );
}