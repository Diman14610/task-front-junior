import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

function Buyers() {
    const [list, setList] = useState(l)
    const [buf, setBuf] = useState(l)

    const Pagination = (size, def = 0) => {
        setList(
            () => buf.slice(def, size)
        )
    }
    const Sorting = (field, asc = true) => {
        switch (field) {
            case 'avg':
                if (asc)
                    setList(JSON.parse(JSON.stringify(list.sort((cur, next) => cur.avg - next.avg))))
                else
                    setList(JSON.parse(JSON.stringify(list.sort((cur, next) => next.avg - cur.avg))))
                break;
            case 'quantity':
                if (asc)
                    setList(JSON.parse(JSON.stringify(list.sort((cur, next) => cur.quantity - next.quantity))))
                else
                    setList(JSON.parse(JSON.stringify(list.sort((cur, next) => next.quantity - cur.quantity))))
                break;
            case 'total':
                if (asc)
                    setList(JSON.parse(JSON.stringify(list.sort((cur, next) => cur.avg * cur.quantity - next.avg * next.quantity))))
                else
                    setList(JSON.parse(JSON.stringify(list.sort((cur, next) => next.avg * next.quantity - cur.avg * cur.quantity))))
                break;
            case 'name':
                if (asc) // ((a.name === b.name) ? 0 : ((a.name > b.name) ? 1 : -1))
                    setList(JSON.parse(JSON.stringify(list.sort((cur, next) => cur.name === next.name ? 0 : ((cur.name > next.name) ? 1 : -1)))))
                else
                    setList(JSON.parse(JSON.stringify(list.sort((cur, next) => cur.name === next.name ? 0 : ((cur.name < next.name) ? 1 : -1)))))
                break;
            case 'id':
                if (asc)
                    setList(JSON.parse(JSON.stringify(list.sort((cur, next) => cur.id - next.id))))
                else
                    setList(JSON.parse(JSON.stringify(list.sort((cur, next) => next.id - cur.id))))
                break;
            default:
                break;
        }
    }
    return (
        <div className='container-table'>
            <table>
                <caption>
                    Покупатели
                    <div>
                        <button onClick={() => Pagination(5)}>5</button>
                        <button onClick={() => Pagination(10)}>10</button>
                        <button onClick={() => Pagination(15)}>15</button>
                    </div>
                </caption>
                <thead>
                    <tr>
                        <th>
                            ID покупателя
                            <button onClick={() => Sorting('id')}>&uarr;</button>
                            <button onClick={() => Sorting('id', false)}>&darr;</button>
                        </th>
                        <th>
                            Имя покупателя
                            <button onClick={() => Sorting('name')}>&uarr;</button>
                            <button onClick={() => Sorting('name', false)}>&darr;</button>
                            <div>
                                <input type='text' onChange={
                                    (e) => setList(list.filter((v) => {
                                        if (v.name.toLocaleLowerCase() === e.target.value.toLocaleLowerCase()) {
                                            return v.name += '<--'
                                        }
                                        else {
                                            if (v.name.includes('<--')) {
                                                return v.name = v.name.substring(0, v.name.length - 3)
                                            }
                                            return v.name
                                        }
                                    }))
                                } />
                            </div>
                        </th>
                        <th>
                            Средний чек
                            <button onClick={() => Sorting('avg')}>&uarr;</button>
                            <button onClick={() => Sorting('avg', false)}>&darr;</button>
                        </th>
                        <th>
                            Количество покупок
                            <button onClick={() => Sorting('quantity')}>&uarr;</button>
                            <button onClick={() => Sorting('quantity', false)}>&darr;</button>
                        </th>
                        <th>
                            Общая выручка
                            <button onClick={() => Sorting('total')}>&uarr;</button>
                            <button onClick={() => Sorting('total', false)}>&darr;</button>
                        </th>
                    </tr>
                </thead>
                <tbody style={{ textAlign: 'center' }}>
                    {
                        list.map((v, i) => {
                            return (<tr key={i}>
                                <td>{v.id}</td>
                                <td><Link to={`/buyers/${v.id}`}>{v.name}</Link></td>
                                <td>{v.avg}</td>
                                <td>{v.quantity}</td>
                                <td>{v.avg * v.quantity}</td>
                            </tr>)
                        })
                    }
                    {
                        list.length === 5 ? (
                            <tr style={{ display: 'flex', backgroundColor: '#fff' }}>

                                <td><button onClick={() => Pagination(5, 0)}>1</button></td>
                                <td><button onClick={() => Pagination(10, 5)}>2</button></td>
                                <td><button onClick={() => Pagination(15, 10)}>3</button></td>
                            </tr>

                        ) : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Buyers
