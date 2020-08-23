import React from 'react'
import propTypes from 'prop-types'
import Item from './item.jsx'

function Block(props) {  
    return (
        props.content.map(item => {
            return <Item item={item} key={item.id} onClick={props.onClick} />
        })
    )       
}

Block.propTypes = {
    content: propTypes.arrayOf(propTypes.object).isRequired,
    onClick: propTypes.func.isRequired
}

export default Block