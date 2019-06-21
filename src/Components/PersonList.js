import React from 'react'
import Detail from './Detail';
import './mystyle.css'

function PersonList() {

    const persons = [
        {
            name: 'vipul1',
			id:'1'
        },
        {
            name: 'vipul2',
			id:'2'
        }
    ];
    const personList = persons.map(detail => <Detail key={detail.id} details={detail} />)
    return (

        <div className='primary'>
            
            {personList}
        </div>
		
		);
}
export default PersonList
