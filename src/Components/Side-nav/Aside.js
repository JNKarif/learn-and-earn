import React from 'react';
import './Aside.css'
import '../Cards/Cards'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Aside = ({ list }) => {
    console.log(list)
    const notify = () => toast("Congratulations! you have finished all the activities today");

    let total = 0;
    for (const subject of list) {
        total = total + subject.duration;
    }

    const addBreak = () => {

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
                    <button>10ms</button>
                    <button>20ms</button>
                    <button>30ms</button>
                    <button>50ms</button>
                </div>
            </div>

            <div className='activity-container'>

                <div><h3>Activity Details</h3></div>
                <div><h4>Total activity: {list.length}</h4></div>
                <div>
                    <h4>Activity Time: {total} ms</h4>


                </div>

                <div>
                    <h4>Rest Time: 0 ms</h4>



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