import React from 'react'
import Person from './Person';

function NameList() {
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
    const personlist = persons.map(person =><Person person={person}/>)

    return <div>
        {personlist}
    </div>
}
export default NameList