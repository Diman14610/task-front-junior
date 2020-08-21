import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Authorization from './Authorization'

const Aside = () => {
    const [img, setImg] = useState(null)
    return (
        <div className='container-aside'>
            {img === null ? (<Authorization upUrl={(f) => setImg(f)} />) :
                (<>
                    <div>
                        <img src={img} alt='img' style={{ height: '124px' }} />
                    </div>

                    <div className='container-aside-links'>
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