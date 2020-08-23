import React from 'react'
import {render} from 'react-dom'

import './style.scss'

import Block from './components/block.jsx'


function App() {
    let [content, setContent] = React.useState( [
        {id: 1, title: 'с фуа-гра', existence: true, select: false, disable: false},
        {id: 2, title: 'с рыбой', existence: true, select: false, disable: false},
        {id: 3, title: 'с курой', existence: false, select: false, disable: true},
    ])

    function Selected(id) {
        setContent(
            content.map(item => {
                if (item.id === id) {
                    item.select = !item.select
                    console.log('test', item)
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