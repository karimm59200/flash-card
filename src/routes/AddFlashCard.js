import {useDispatch} from "react-redux";
import {addFlashCardAction, selectFlashCards} from "../components/flashCard/flashSlice";
import {useRef} from "react";
import {useSelector} from "react-redux";



const AddFlashCard = () => {

    const dispatch = useDispatch();
    const questRef = useRef();
    const ansRef = useRef();
    const flashCards = useSelector(selectFlashCards);



    const submit = (e) => {
        e.preventDefault();
        const id = flashCards.length + 1;
        const question = questRef.current.value;
        const answer = ansRef.current.value;
        // dispatch(addFlashCardAction({question, answer}));
        questRef.current.value = '';
        ansRef.current.value = '';

        const flashValues = {

            id,
            question,
            answer

        }

        dispatch(addFlashCardAction(flashValues));
        console.log(flashValues);
    }


    return (
        <div className="row my-3 d-flex flex-column">
            <div className="col-10 offset-1 bg-dark rounded text-light p-3">
                <h3>Ajout d'une flash card</h3>
                <form onSubmit={submit}>
                    <div className="mb-3 text-start">
                        <label htmlFor="question" className="form-label"> Question</label>
                        <input type="text" className="form-control" id="question"
                               placeholder="Taper votre question ici" ref={questRef}/>
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="answer" className="form-label">Answer</label>
                        <input type="text" className="form-control" id="answer" placeholder=" Son Explication"
                               ref={ansRef}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                </form>
            </div>
        </div>
    );
};

export default AddFlashCard;