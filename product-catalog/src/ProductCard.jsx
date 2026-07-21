import React from "react";

const ProductCard = ({product}) => {
  return (
    <div
      key={product.id}
      className="w-80 flex flex-col border-solid border-red-600 bg-[rgb(200,200,200)] p-2 rounded-xl"
    >
      <img className="w-80 h-50 " src={product.image} alt="" />
      <h1 className="font-bold">{product.name}</h1>
      <h3>{product.brand}</h3>
      <h2>{product.category}</h2>
      <h3>Rating: {product.rating}</h3>
      <h2>₹{product.price}</h2>
      <div className="flex mt-2 justify-between pl-2 pr-2">
        <button className="bg-orange-500 pl-3 pr-3 rounded">
          {product.inStock ? "available" : "Not available"}
        </button>
        <button className="bg-blue-500 pl-3 pr-3 rounded">
          {product.isAdded ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;






// const ProductCard = ({products}) => {
//   return (
//     <div className='flex h-full gap-5 flex-wrap p-5 w-full '>
//       {products.map((product)=>{
//         return(
//           <div key={product.id} className='w-80 flex flex-col border-solid border-red-600 bg-[rgb(200,200,200)] p-2 rounded-xl'>
//             <img className='w-80 h-50 ' src={product.image} alt="" />
//             <h1 className='font-bold'>{product.name}</h1>
//             <h3>{product.brand}</h3>
//             <h2>{product.category}</h2>
//             <h3>Rating: {product.rating}</h3>
//             <h2>₹{product.price}</h2>
//             <div className='flex mt-2 justify-between pl-2 pr-2'><button className='bg-orange-500 pl-3 pr-3 rounded'>{product.inStock ? "available" : "Not available"}</button>
//             <button className='bg-blue-500 pl-3 pr-3 rounded'>{product.isAdded ? "Added to Cart" : "Add to Cart" }</button></div>

//           </div>
//         )
//       })}
//     </div>
//   )
// }
// export default ProductCard
