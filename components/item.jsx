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
            <div className="block__triangle"></div>
            <p>Сказочное заморское яство</p>
            <div className="block__title">
                <h1>Нямушка</h1>
                <span>{item.title}</span>
            </div>          
            <ul className="block__description">
                <li>
                    {item.portion}
                </li>
                <li>
                    {item.give}
                </li>
                <li>
                    {item.reviews}
                </li>
            </ul>
            <div className="block__size">
                <p>{item.size}</p>
                <span>кг</span>
            </div>

            
        </div>
    )

}

export default Item



