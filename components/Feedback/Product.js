
function Product({ products }) {
    
    return(
        <div>
            <h1>Shoes here...</h1>
            {products?.map(({ id , title , description , price, count , image }) => (
                <Product
                key={id}
                title={title}
                description={description}
                price={price}
                count={count}
                image={image}
                >
                    
                </Product>

            ))}
            
        </div>
    )
}

export default Product