import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/Hello';
import Hello from './Components/Hello';
import Welcome from './Components/Welcome'
import Const from './Components/Const'
import Message from './Components/Messgae'
import Counter from './Components/Counter'
import Greet from './Components/Greet'
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import Papa from './Components/Papa';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import PersonList from './Components/PersonList';
import './mystyles.css'
import styles from './mystyles.module.css'
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';

function App() {
    
    return (
        <div>
            {/* <Hello name="vipul" age="21">
                <button value="submit">Submit</button>
            </Hello>
            <Welcome name='Vicky'>Welcome children</Welcome>
             <Const/>
     <h1>Hii</h1>
            <Message></Message>*/}
            {/* <counter></counter>
            <Greet name='Vipul' sname='kithani'></Greet>
            <FunctionClick />
            <ClassClick />
            <EventBind />
            <ParentComponent />*/}
            {/*<Papa />
            <h1 className='error'>Error</h1>
            <h1 className={styles.success}>Success</h1>
            <UserGreeting />
            <NameList />
            <PersonList/>
            <Form/>
            */}
            <LifecycleA/>
            
  </div>
  );
}

export default App;


