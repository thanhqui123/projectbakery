import React, { useState } from 'react'
import './CartProductAll.css'
import data from './data'
import CartProduct from '../CartProduct/CartProduct'
export default function () {
    const [items, setItems] = useState(2)
    const handleOnclick = () => {
        setItems(items + items)
    }

    const slice = data.cardData.slice(0, items)
    return (
        <div>
            {slice.map((item, id) => {
                return (
                    <div className="cartProductAll" key={id}>
                        <div className="cartProductAllItem">
                            <ul>
                                <li>
                                    {item.name}
                                    <CartProduct />
                                </li>
                                <li>
                                    {item.name}
                                    <CartProduct />
                                </li>
                                <li>
                                    {item.name}
                                    <CartProduct />
                                </li>
                                <li>
                                    {item.name}
                                    <CartProduct />
                                </li>
                                <li>
                                    {item.name}
                                    <CartProduct />
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            })}
            <div className="loadmore">
                <button onClick={() => handleOnclick()}>Load More</button>
            </div>
        </div>
    )
}
