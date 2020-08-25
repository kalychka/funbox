import React from 'react'
import {render} from 'react-dom'

import './fonts/fonts.scss'
import './style.scss'


import Block from './components/block.jsx'


function App() {
    let [content, setContent] = React.useState( [

        {id: 1,
        title: 'с фуа-гра',
        portion: '10 порций',
        give: 'мышь в подарок',
        size: '0,5',
        subtitle: 'Печень утки разварная с артишоками.',
        existence: true,
        select: false,
        disable: false},

        {id: 2,
        title: 'с рыбой',
        portion: '40 порций',
        give: '2 мыши в подарок',
        size: '2',
        subtitle: 'Головы щучьи с чесноком да свежайшая семгушка.',
        existence: true,
        select: false,
        disable: false},

        {id: 3,
        title: 'с курой',
        portion: '100 порций',
        give: '5 мышей в подарок',
        size: '5',
        subtitle: 'Филе из цыплят с трюфелями в больоне.',
        reviews: 'Заказчик доволен',
        existence: false,
        select: false,
        disable: true},

    ])

    function Selected(id) {
        setContent(
            content.map(item => {
                if (item.id === id) {
                    item.select = !item.select
                }
                return item
            })
            
        )
    }

    return (
        <div className="wrapper">
            <Block content={content} onClick={Selected} />
        </div>
    )
}

render(<App />, document.getElementById('app'));