import React from 'react'
import ProductCard from './ProductCard'

const App = () => {

   const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    brand: "Sony",
    category: "Electronics",
    price: 4999,
    rating: 4.7,
    image: "https://picsum.photos/300/250?random=1",
    inStock: true,
    isAdded: false
  },
  {
    id: 2,
    name: "Running Shoes",
    brand: "Nike",
    category: "Footwear",
    price: 3499,
    rating: 4.5,
    image: "https://picsum.photos/300/250?random=2",
    inStock: true,
    isAdded: false
  },
  {
    id: 3,
    name: "Smart Watch",
    brand: "Samsung",
    category: "Electronics",
    price: 8999,
    rating: 4.8,
    image: "https://picsum.photos/300/250?random=3",
    inStock: true,
    isAdded: false
  },
  {
    id: 4,
    name: "Cotton T-Shirt",
    brand: "Puma",
    category: "Clothing",
    price: 799,
    rating: 4.2,
    image: "https://picsum.photos/300/250?random=4",
    inStock: false,
    isAdded: false
  },
  {
    id: 5,
    name: "Gaming Mouse",
    brand: "Logitech",
    category: "Accessories",
    price: 2499,
    rating: 4.6,
    image: "https://picsum.photos/300/250?random=5",
    inStock: true,
    isAdded: false
  },
  {
    id: 6,
    name: "Laptop Backpack",
    brand: "Skybags",
    category: "Bags",
    price: 1899,
    rating: 4.4,
    image: "https://picsum.photos/300/250?random=6",
    inStock: true,
    isAdded: false
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    brand: "Redragon",
    category: "Accessories",
    price: 3999,
    rating: 4.7,
    image: "https://picsum.photos/300/250?random=7",
    inStock: false,
    isAdded: false
  },
  {
    id: 8,
    name: "Men's Hoodie",
    brand: "Adidas",
    category: "Clothing",
    price: 2199,
    rating: 4.3,
    image: "https://picsum.photos/300/250?random=8",
    inStock: true,
    isAdded: false
  },
  {
    id: 9,
    name: "Wireless Speaker",
    brand: "JBL",
    category: "Electronics",
    price: 5499,
    rating: 4.8,
    image: "https://picsum.photos/300/250?random=9",
    inStock: true,
    isAdded: false
  },
  {
    id: 10,
    name: "Casual Wrist Watch",
    brand: "Fossil",
    category: "Fashion",
    price: 6999,
    rating: 4.5,
    image: "https://picsum.photos/300/250?random=10",
    inStock: true,
    isAdded: false
  }
]


  return (
    <div className='flex h-full gap-5 flex-wrap p-5 w-full'>
      {products.map((product) => {
        return (
        <ProductCard  product = {product} /> )
      })}
    </div>
  )
}

export default App




























// import ProductCard from './ProductCard';
// const App = () => {
//   const products = [
//   {
//     id: 1,
//     name: "Wireless Bluetooth Headphones",
//     brand: "Sony",
//     category: "Electronics",
//     price: 4999,
//     rating: 4.7,
//     image: "https://picsum.photos/300/250?random=1",
//     inStock: true,
//     isAdded: false
//   },
//   {
//     id: 2,
//     name: "Running Shoes",
//     brand: "Nike",
//     category: "Footwear",
//     price: 3499,
//     rating: 4.5,
//     image: "https://picsum.photos/300/250?random=2",
//     inStock: true,
//     isAdded: false
//   },
//   {
//     id: 3,
//     name: "Smart Watch",
//     brand: "Samsung",
//     category: "Electronics",
//     price: 8999,
//     rating: 4.8,
//     image: "https://picsum.photos/300/250?random=3",
//     inStock: true,
//     isAdded: false
//   },
//   {
//     id: 4,
//     name: "Cotton T-Shirt",
//     brand: "Puma",
//     category: "Clothing",
//     price: 799,
//     rating: 4.2,
//     image: "https://picsum.photos/300/250?random=4",
//     inStock: false,
//     isAdded: false
//   },
//   {
//     id: 5,
//     name: "Gaming Mouse",
//     brand: "Logitech",
//     category: "Accessories",
//     price: 2499,
//     rating: 4.6,
//     image: "https://picsum.photos/300/250?random=5",
//     inStock: true,
//     isAdded: false
//   },
//   {
//     id: 6,
//     name: "Laptop Backpack",
//     brand: "Skybags",
//     category: "Bags",
//     price: 1899,
//     rating: 4.4,
//     image: "https://picsum.photos/300/250?random=6",
//     inStock: true,
//     isAdded: false
//   },
//   {
//     id: 7,
//     name: "Mechanical Keyboard",
//     brand: "Redragon",
//     category: "Accessories",
//     price: 3999,
//     rating: 4.7,
//     image: "https://picsum.photos/300/250?random=7",
//     inStock: false,
//     isAdded: false
//   },
//   {
//     id: 8,
//     name: "Men's Hoodie",
//     brand: "Adidas",
//     category: "Clothing",
//     price: 2199,
//     rating: 4.3,
//     image: "https://picsum.photos/300/250?random=8",
//     inStock: true,
//     isAdded: false
//   },
//   {
//     id: 9,
//     name: "Wireless Speaker",
//     brand: "JBL",
//     category: "Electronics",
//     price: 5499,
//     rating: 4.8,
//     image: "https://picsum.photos/300/250?random=9",
//     inStock: true,
//     isAdded: false
//   },
//   {
//     id: 10,
//     name: "Casual Wrist Watch",
//     brand: "Fossil",
//     category: "Fashion",
//     price: 6999,
//     rating: 4.5,
//     image: "https://picsum.photos/300/250?random=10",
//     inStock: true,
//     isAdded: false
//   }
// ];
//   return (
//     <div>
//       <ProductCard  products = {products} />
//     </div>
//   )
// }
// export default App
