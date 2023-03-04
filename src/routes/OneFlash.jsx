import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';



const OneFlash = () => {


    const {id} = useParams();
    const flash = useSelector(state => state.flash.flashCards).find(f => f.id == parseInt(id));



        return (

            <div className="row my-3 d-flex flex-column">
                <div className="col-10 offset-1 bg-dark rounded text-light p-3">
                    <div className="mb-3">
                        <div key={flash.id}>
                            <div>{flash.question}</div>
                            <select className="form-select form-select-sm" style={{padding: "10px"}}
                                    aria-label=".form-select-sm example">
                                <option selected>Solution</option>
                                <option>{flash.answer}</option>

                            </select>
                        </div>
                        <hr className="text-white"/>
                    </div>


                </div>
            </div>

        )

    }



export default OneFlash;