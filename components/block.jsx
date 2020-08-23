import React from 'react'
import propTypes from 'prop-types'

function Block({onClick, content}) { 
      
    return (
        content.map(content => {
            return (
            <div className="block" onClick={() => onClick(content.id)} key={content.id}>
                <p>{content.title}</p>
            </div>
            )
        })
    )    
}

Block.propTypes = {
    content: propTypes.arrayOf(propTypes.object).isRequired,
    onClick: propTypes.func.isRequired
}

export default Block