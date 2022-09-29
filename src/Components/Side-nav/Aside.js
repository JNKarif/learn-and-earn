import React from 'react';
import './Aside.css'
const Aside = () => {
    return (
        <div className='aside-nav'>

            <div>
                <img src="https://images.unsplash.com/photo-1596796867443-48bb5d2ebaa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="" />
                <h3>Arifur Rahaman</h3>
                <p><small>Web Developer</small></p>
            </div>

            <div className='rest-container'>
                <h4>
                    Resting Time
                </h4>
                <div className='rest-btn'>
                    <button>10ms</button>
                    <button>20ms</button>
                    <button>30ms</button>
                    <button>50ms</button>
                </div>
            </div>

            <div className='activity-container'>

                <div><h3>Activity Details</h3></div>
                <div>
                    <h4>Total Activity Time: 0ms</h4>


                </div>

                <div>
                    <h4>Total Rest Time: 0ms</h4>



                </div>


            </div>


            <div className='finished-btn'>
                <button>Activity Finished</button>
            </div>


        </div>


    );
};

export default Aside;