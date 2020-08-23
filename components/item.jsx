import React from 'react'

function Item({ item, onClick }) {
    const classes = []

    if (item.select === true && item.disable == false) {
        classes.push('block-selected')
    }
    if (item.disable === true) {
        classes.push('disable')
    }
    return (
        <div className={ 'block ' + classes.join(' ')} onClick={() => onClick(item.id)} key={item.id}>
            <div className="block-triangle"></div>
            <p>{item.title}</p>
        </div>
    )

}

export default Item



