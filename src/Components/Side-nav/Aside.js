import React, { useEffect, useState } from 'react';
import './Aside.css'
import '../Cards/Cards'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb } from '../Utilities/FakeDb/FakeDb';
const Aside = ({ list }) => {
    const [data, setData] = useState(0);

    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     localStorage.setItem('items', JSON.stringify(items));
    // }, [items]);


    // console.log(list)
    const notify = () => toast("Congratulations! you have finished all the activities today");

    let total = 0;
    for (const subject of list) {
        total = total + subject.duration;


    }

    const addBreak = (event) => {

        console.log(event)
        const time = event.target.innerText
        console.log(time)
        setData(time)

        addToDb(event)


    }

    return (
        <div className='aside-nav'>

            <div>
                <img src="https://images.unsplash.com/photo-1596796867443-48bb5d2ebaa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="" />
                <h3>Arifur Rahaman</h3>
                <p><small>Web Developer</small></p>
            </div>

            <div className='rest-container'>
                <h3>Resting Time</h3>
                <div className='rest-btn'>
                    <button onClick={(event) => addBreak(event)}>10ms</button>
                    <button onClick={(event) => addBreak(event)}>20ms</button>
                    <button onClick={(event) => addBreak(event)}>30ms</button>
                    <button onClick={(event) => addBreak(event)}>50ms</button>
                </div>
            </div>

            <div className='activity-container'>

                <div><h3>Activity Details</h3></div>
                <div><h4>Total activity: {list.length}</h4></div>
                <div>
                    <h4>Activity Time: {total} ms</h4>


                </div>

                <div>
                    <h4>Rest Time: {data}</h4>



                </div>


            </div>


            <div className='finished-btn'>
                <button onClick={notify}>Activity Finished</button>
                <ToastContainer />

                {/* <button>Activity Finished</button> */}
            </div>




        </div>


    );
};

export default Aside;