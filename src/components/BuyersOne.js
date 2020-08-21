import React from 'react'
import { useParams } from 'react-router-dom'

const l = [{ id: 1, name: 'Дмитрий', avg: 450, quantity: 12 },
{ id: 2, name: 'Дмитрий', avg: 532, quantity: 87 },
{ id: 3, name: 'Василий', avg: 7, quantity: 3 },
{ id: 4, name: 'Анатолий', avg: 24, quantity: 75 },
{ id: 5, name: 'Михаил', avg: 64, quantity: 47 },
{ id: 6, name: 'Яша', avg: 84, quantity: 5 },
{ id: 7, name: 'Анастасия', avg: 42, quantity: 96 },
{ id: 8, name: 'Владимир', avg: 63, quantity: 564 },
{ id: 9, name: 'Виктория', avg: 86, quantity: 36 },
{ id: 10, name: 'Дмитрий', avg: 23, quantity: 85 },
{ id: 11, name: 'Андрей', avg: 15, quantity: 93 },
{ id: 12, name: 'Софа', avg: 94, quantity: 75 },
{ id: 13, name: 'Виталя', avg: 143, quantity: 23 },
{ id: 14, name: 'Ваня', avg: 974, quantity: 97 },
{ id: 15, name: 'Слава', avg: 664, quantity: 54 }
]

function BuyersOne() {
    const { id } = useParams()
    return (
        <div>
            {
                l.map((v) => v.id === parseInt(id) ? <div>{v.id} {v.name} {v.avg} {v.quantity} {v.avg * v.quantity}</div> : null)
            }
        </div>
    )
}

export default BuyersOne
