import React from 'react'
import {render} from 'react-dom'

import './style.scss'

import Block from './components/block.jsx'
import { func } from 'prop-types'

function App() {
    let [content, setContent] = React.useState( [
        {id: 1, title: 'с фуа-гра', existence: true, select: false},
        {id: 2, title: 'с рыбой', existence: true, select: false},
        {id: 3, title: 'с курой', existence: false, select: false},
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