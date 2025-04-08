import React, { useState, useEffect } from 'react'

const ProductCard = ({ item }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = item?.img;
        img.onload = () => setIsLoading(false);
    }, [item]);

    return (
        <div className='product-card'>

            <img src={item?.img} alt={item?.title} />
            <p><span style={{color: "green"}}>{item?.choice ? "[Conscious Choice]" : ""}</span> <span style={{color: "red" }}>{item?.new ? "[New]" : ""}</span></p>
            <h3>{item?.title}</h3>
            <p>{item?.price.toLocaleString()}원</p>
            
        </div>
    )
}

export default ProductCard
