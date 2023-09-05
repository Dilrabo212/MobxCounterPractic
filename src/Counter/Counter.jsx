import React from 'react'
import countStore from '../Store/Store'
import { observer } from 'mobx-react-lite'
import './style.css'

export default observer(function Counter() {
    return (
        <div className='containerWrapper'>
            <div className='container'>
                <div className='wrapper'>
                    <button className='increment' onClick={() => countStore.increment()}>increment</button>
                    <div className='counter'>{countStore.counter}</div>
                    <button className='dicriment' onClick={() => countStore.dicriment()}>dicriment</button>
                </div>
            </div>
        </div>

    )
}
)