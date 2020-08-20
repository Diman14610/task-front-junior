import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Authorization from './Authorization'

const Aside = () => {
    const [img, setImg] = useState(null)
    return (
        <div style={
            {
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }
        }>
            {img === null ? (<Authorization upUrl={(f) => setImg(f)} />) :
                (<>
                    <div>
                        <img src={img} alt='img' style={{ height: '124px' }} />
                    </div>

                    <div>
                        <Link to='/'>Главная</Link>
                        <Link to='/terminals'>Терминалы</Link>
                        <Link to='/Buyers'>Покупатели</Link>
                    </div>

                    <div>
                        Copyright © 2020
            </div>
                </>)}


        </div>
    )
}

export default Aside