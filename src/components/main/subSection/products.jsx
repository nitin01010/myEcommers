import React from 'react'
import Card from './card';
import LogoProducts from '../../../../public/top-product.png';
import { Link } from 'react-router-dom';


const Products = () => {
    const [Products, setProducts] = React.useState([
        {
            "id": 1,
            "title": "Adicolor Classics Joggers",
            "price": 63.85,
            "image": "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laboriosam.",
            "category": "Dress",
            "colors": ["black", "white", "red"]
        },
        {
            "id": 2,
            "title": "Vintage Denim Jacket",
            "price": 89.99,
            "image": "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
            "description": "Vintage denim for a timeless style. Perfect for casual outings.",
            "category": "Jackets",
            "colors": ["blue", "grey"]
        },
        {
            "id": 3,
            "title": "Classic Leather Boots",
            "price": 120.50,
            "image": "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
            "description": "Durable and stylish, these boots are a must-have for any wardrobe.",
            "category": "Footwear",
            "colors": ["brown", "black"]
        },
        {
            "id": 4,
            "title": "Minimalist Watch",
            "price": 199.95,
            "image": "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
            "description": "Sleek and elegant, this watch is the perfect accessory for any occasion.",
            "category": "Accessories",
            "colors": ["black", "silver", "gold"]
        },
        {
            "id": 5,
            "title": "Graphic Tee Collection",
            "price": 29.99,
            "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
            "description": "Express yourself with our range of graphic tees. Comfortable and stylish.",
            "category": "T-Shirts",
            "colors": ["white", "yellow", "pink"]
        },
        {
            "id": 6,
            "title": "Sports Cap",
            "price": 24.99,
            "image": "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
            "description": "Keep the sun out of your eyes with our sports caps. Available in various colors.",
            "category": "Hats",
            "colors": ["red", "blue", "green"]
        },
        {
            "id": 7,
            "title": "Yoga Mat",
            "price": 45.00,
            "image": "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
            "description": "High-quality yoga mat for your daily practice. Non-slip and durable.",
            "category": "Fitness",
            "colors": ["purple", "green", "blue"]
        },
        {
            "id": 8,
            "title": "Bluetooth Headphones",
            "price": 130.75,
            "image": "https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
            "description": "Experience sound like never before with our Bluetooth headphones.",
            "category": "Electronics",
            "colors": ["black", "white"]
        },
        {
            "id": 9,
            "title": "Backpack",
            "price": 59.99,
            "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
            "description": "Stylish and functional, our backpacks are perfect for everyday use.",
            "category": "Bags",
            "colors": ["grey", "black", "blue"]
        },
        {
            "id": 10,
            "title": "Sunglasses",
            "price": 75.00,
            "image": "https://images.unsplash.com/photo-1502767089025-6572583495f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
            "description": "Protect your eyes in style with our range of sunglasses.",
            "category": "Accessories",
            "colors": ["brown", "black", "white"]
        }
    ]);
    return (
        <div>
            <p className=' text-xl lg:text-3xl text-center font-semibold  capitalize'>Or subscribe to the newsletter</p>
            <br />
            <div className=' flex flex-wrap gap-1 justify-center  lg:justify-between '>
                {
                    Products.map((item, index) => {
                        return (
                            <Link to={ `/${item.title}/${item.id}` } >
                                <Card key={ index } item={ item } img={ LogoProducts } />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products