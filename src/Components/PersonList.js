import React from 'react'
import Detail from './Detail';
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
    const personList = persons.map(detail => <Detail details={detail} />)
    return (

        <div>
            {personList}
        </div>
		
		);
}
export default PersonList
