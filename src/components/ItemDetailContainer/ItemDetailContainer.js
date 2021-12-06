import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        setTimeout(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1574&limit=1')
        .then(response => response.json())
        .then(respJson => {console.log(respJson.results[0]); setItems(respJson.results[0])})
        .catch(error => console.log('Error: ', error))
        }, 2000);
    }, [])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail items={items}/>

        </div>
    )
}

export default ItemDetailContainer
