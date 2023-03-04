import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";


const FlashCardDisplay = () => {
    const flash = useSelector(state => state.flash.flashCards)

    return (

        <div className="row my-3 d-flex flex-column">
            <div className="col-10 offset-1 bg-dark rounded text-light p-3">
                {flash.map(flash => <div className="mb-3">
                    <h3><Link to={`/flashcard/${flash.id}`}>FlashCard n°{flash.id}</Link></h3>
                    {/*<div key={flash.id}>{flash.question}</div>*/}
                    {/*<select key={flash.id.answer} className="form-select form-select-sm" style={{padding: "10px"}}*/}
                    {/*        aria-label=".form-select-sm example">*/}
                    {/*    <option selected>Solution</option>*/}
                    {/*    <option key={flash.id}>{flash.answer}</option>*/}

                    {/*</select>*/}
                    <hr className="text-white"/>
                </div>)}


            </div>
        </div>


    )
        ;
};

export default FlashCardDisplay;