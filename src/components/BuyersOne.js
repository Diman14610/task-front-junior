import React from 'react'
import { useParams } from 'react-router-dom'

const l = [{ id: 1, name: 'Дмитрий', avg: 450, quantity: 12, total: 1500 },
{ id: 2, name: 'Дмитрий', avg: 532, quantity: 87, total: 4600 },
{ id: 3, name: 'Василий', avg: 7, quantity: 3, total: 7600 },
{ id: 4, name: 'Анатолий', avg: 24, quantity: 75, total: 4500 },
{ id: 5, name: 'Михаил', avg: 64, quantity: 47, total: 2300 },
{ id: 6, name: 'Яша', avg: 84, quantity: 5, total: 7640 },
{ id: 7, name: 'Анастасия', avg: 42, quantity: 96, total: 7532 },
{ id: 8, name: 'Владимир', avg: 63, quantity: 564, total: 5424 },
{ id: 9, name: 'Виктория', avg: 86, quantity: 36, total: 964 },
{ id: 10, name: 'Дмитрий', avg: 23, quantity: 85, total: 233 },
{ id: 11, name: 'Андрей', avg: 15, quantity: 93, total: 643 },
{ id: 12, name: 'Софа', avg: 94, quantity: 75, total: 753 },
{ id: 13, name: 'Виталя', avg: 143, quantity: 23, total: 653 },
{ id: 14, name: 'Ваня', avg: 974, quantity: 97, total: 864 },
{ id: 15, name: 'Слава', avg: 664, quantity: 54, total: 234 }
]

function BuyersOne() {
    const { id } = useParams()
    return (
        <div>
            {
                l.map((v) => v.id === parseInt(id) ? <div>{v.id} {v.name} {v.avg} {v.quantity} {v.total}</div> : null)
            }
        </div>
    )
}

export default BuyersOne
