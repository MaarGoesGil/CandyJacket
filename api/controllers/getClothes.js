const clothesList = [{
    id: 1,
    name: 'T-shirt',
    category: 'T-shirt',
    price: '$11',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
},{
    id: 2,
    name: 'T-shirt',
    category: 'T-shirt',
    price: '$10',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
},{
    id: 3,
    name: 'T-shirt',
    category: 'T-shirt',
    price: '$20',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
},{
    id: 4,
    name: 'T-shirt',
    category: 'T-shirt',
    price: '$100',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
},{
    id: 5,
    name: 'T-shirt',
    category: 'T-shirt',
    price: '$10',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
},{
    id: 6,
    name: 'T-shirt',
    category: 'T-shirt',
    price: '$1',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
}];

const getClothes = (req, res) => {
    const { category } = req.query
    try {
        const clothes = clothesList.filter(clothes => clothes.category.toLowerCase() === category.toLowerCase()).sort((a, b) => ifa.price - b.price)
        res.status(200).json({
            message: 'Success',
            clothes
        })
    }
    catch (err) {
        console.log(err)
    }
};

module.exports = getClothes;