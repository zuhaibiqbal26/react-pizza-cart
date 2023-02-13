const Product = (props) => {
    const { product } = props;
    return (
        <div>
            <img src='/images/peproni.png' alt='pizza' />
            <div className='text-center'>
                <h2 className='text-lg fonr-bold py-2'>{product.name}</h2>
                <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>{product.size}</span>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <span>Rs {product.price}</span>
                <button className='bg-yellow-500 py-1 px-4 rounded-full font-bold hover:bg-yellow-600'>ADD</button>
            </div>
        </div>
    )
}

export default Product