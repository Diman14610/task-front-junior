import React from 'react'
import { useLocation } from 'react-router-dom'

function Error() {
    const { pathname } = useLocation()
    return (
        <div>
            {pathname === '/' ? null : 'ошибка 404'}
        </div>
    )
}

export default Error
