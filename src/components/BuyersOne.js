import React from 'react'
import { useParams } from 'react-router-dom'

function BuyersOne() {
    const { id } = useParams()
    return (
        <div>
            {id}
        </div>
    )
}

export default BuyersOne
