import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Unionbank() {
    return (
        <div>
            <h1>Unionbank</h1>
            <Andhrabank  location="Tirupati"/>
            <Corporationbank location="Chittoor"/>
            
        </div>
    )
}
