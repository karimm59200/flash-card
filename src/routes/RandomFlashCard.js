import React from 'react';

const RandomFlashCard = () => {

    const [flashCard, setFlashCard] = React.useState([{
        id: 0,
        question: "Comment déclare t-on une variable en JS ?",
        answer: "let maVariable = 1 , const maVariable ou var mais attention à l'utilisation de var;"
    },{
        id: 1,
        question: "Question 2 ",
        answer: "Answer 2"

    }]);

    return (

        <div className="row my-3 d-flex flex-column">
            <div className="col-10 offset-1 bg-dark rounded text-light p-3">
                <div>
                    <h3>Flashcard n° {flashCard[0 + 1].id}: {flashCard[0].question}</h3>
                    {console.log(flashCard[0].id)}
                    {console.log(flashCard[0].question)}
                </div>
                <hr className="text-white"/>
                <select className="form-select form-select-sm" style={{padding:"10px"}} aria-label=".form-select-sm example">
                    <option selected>Solution</option>

                    <option value={1}>{flashCard[0].answer}</option>
                </select>
            </div>
        </div>
    );
};

export default RandomFlashCard;