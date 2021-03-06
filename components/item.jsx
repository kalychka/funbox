import React from 'react'

function Item({ item, onClick, onMouseLeave }) {

    const classes = []
    const selected = []
    const hidden = []
    const selectedColor = []

    if (item.select === true && item.disable == false) {
        classes.push('block-selected')
        selected.push('visible')
        hidden.push('hidden')
    }
    if (item.disable === true) {
        classes.push('disable')
    }
    if ( item.hovered === true ) {
        selectedColor.push('suptitle_red')
    }

    return (
        <div className="block__wrapper">
            <div className={ 'block ' + classes.join(' ')} onClick={ () => onClick(item.id) } onMouseLeave={ () => onMouseLeave(item.id) } key={item.id}>
                <div className="block__triangle"></div>
                
                <p className={selectedColor.join(' ')}>
                    {item.suptitle}
                </p>

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
            <p className={ 'block__wrapper__subtitle' + ' ' + hidden.join(' ') } onClick={ () => onClick(item.id) } >Чего сидишь? Порадуй котэ,<a href="#">купи.</a></p>
            <p className={ 'block__wrapper__subtitle_selected' + ' ' + selected.join(' ') } >
                {item.subtitle}
            </p>
            <p className="block__wrapper__subtitle_disable">
                Печалька, {item.title} закончился
            </p>
        </div>
    )

}

export default Item



