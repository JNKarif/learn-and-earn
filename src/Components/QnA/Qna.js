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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia repellendus magni dolores, exercitationem eius maxime odio repellat vitae soluta quam nisi eum, officiis aperiam totam alias laborum, esse ab harum.</p>

                <h3>Props vs State</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia repellendus magni dolores, exercitationem eius maxime odio repellat vitae soluta quam nisi eum, officiis aperiam totam alias laborum, esse ab harum.</p>
                <h3>useEffect's other uses except data loading from API</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia repellendus magni dolores, exercitationem eius maxime odio repellat vitae soluta quam nisi eum, officiis aperiam totam alias laborum, esse ab harum.</p>


            </div>
        </div>

    );
};

export default Qna;