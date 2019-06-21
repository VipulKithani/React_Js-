import React from 'react'
import Person from './Person';

function NameList() {
    const names = ['Bruce', 'Clark', ' Diana', 'Bruce']
    const persons = [
        {
            name:'vipul',
            age:21,
            skill:'react js'
            
        },
        {
            name:'hirtik',
            age:19,
            skill:'bfm'

        },
        {
            name:'omi',
            age:20,
            skill:'Music'

        },

    ]
    const personlist = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

    return <div>
        {personlist}
    </div>
}
export default NameList