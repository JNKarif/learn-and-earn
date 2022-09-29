import React from 'react';
import './Qna.css'

const Qna = () => {
    return (
        <div>
            <div className='qna-header' >
                <h2>Questions & Answers</h2>
            </div>

            <div className='qna-container'>
                <h3>How does React works</h3>
                <p>React was basically developed as javaScript library but not a framework like css's bootsrtap or tailwind or javaScript's Angular by today's tech giant Facebook which reflects a tree which is able to do efficient diff computations on the node. By use of declarative that gives us user interfaces (UI) with utmost efficiency. React runs under some core concepts; threse are as : 1. The component Lifestyle (It has some aspects too such as a. Mounting ; b. Unmounting & c. Updating.) 2) High-Order Components.3) React State and setState(). 4)React Context. 5) Staying up to date with React.
                </p>

                <h3>Props vs State</h3>
                <p>Basically we use props which is read-only to pass data from one component to another whereas state is data that changes over time, and the user can change the state anytime.State works within the components only. State can be passed as props from parent to child components. Props are immutable but state is not. Stateless component can have props but stateless components can not have state.</p>
                <h3>useEffect's other uses except data loading from API</h3>
                <p>1. We can run once on mount fetching API data we can use useEffect by using an empty array as dependency.</p>

                <p>2. For fast user's feedback we can validate an input at the time of receiving characters by useEffect. </p>

                <p>3. We can trigger animation upon new array value by useEffect by using 2 states. In that case first state will handle items of component and the animation trigger will be done by another.</p>

                <p>
                    4. useEffect handles effect cleanup.
                </p>


            </div>
        </div>

    );
};

export default Qna;

