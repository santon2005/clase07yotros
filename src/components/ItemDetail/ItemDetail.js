import React from 'react'

const ItemDetail = ({ items }) => {
    return (
        <>
            <img src={items.thumbnail} alt={items.title} />
                <h2>{items.title}</h2>
                <p>{items.price}</p>
        </>
    )
}

export default ItemDetail