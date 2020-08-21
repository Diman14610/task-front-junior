import React, { useState } from 'react'


function Terminals() {
    const [name, setName] = useState(['Наименование'])
    const [diff, setDiff] = useState(['Описание'])
    const [buf, setbuf] = useState([{ name: 'lll', diff: 'diff' }])

    const Add = () => {
        setbuf((p) => p = [...p, { name, diff }])
    }
    return (
        <div className='container-table'>


            <div>
                <div>
                    <input type='text' placeholder='Название терминала' onChange={e => setName(e.target.value)} />
                    <input type='text' placeholder='Описание' onChange={e => setDiff(e.target.value)} />

                    <button onClick={() => Add()}>Добавить</button>
                </div>
                <table>
                    <caption>Терминалы</caption>
                    <thead>
                        <tr>
                            <th>Название терминала</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buf.map((v, i) => {
                                return (<tr key={i}>
                                    <td>{v.name}</td>
                                    <td>{v.diff}</td>
                                    <td>
                                        <button onClick={
                                            () => setbuf(buf.filter((item) => item.name !== v.name && item.diff !== v.diff))
                                        }>Удалить</button>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Terminals
