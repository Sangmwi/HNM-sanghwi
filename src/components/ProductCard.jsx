import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const img = new Image();
        img.src = item?.img;
        img.onload = () => setIsLoading(false);
    }, [item]);

    const handleClick = () => {
        navigate(`/product/${item.id}`);
    };

    return (
        <div className='product-card' onClick={handleClick} style={{ cursor: 'pointer' }}>
            <img src={item?.img} alt={item?.title} />
            <p><span style={{color: "green"}}>{item?.choice ? "[Conscious Choice]" : ""}</span> <span style={{color: "red" }}>{item?.new ? "[New]" : ""}</span></p>
            <h3>{item?.title}</h3>
            <p>{item?.price.toLocaleString()}원</p>
        </div>
    )
}

export default ProductCard
