import FlashCardDisplay from "../components/flashCard/FlashCardDisplay";

const HomePage = () => {
    console.log("HomePage");
    return (
        <>
            <div className="row my-3 d-flex flex-column">
                <div className="col-10 offset-1 bg-dark rounded text-light p-3">
                    <div>
                        <div className="d-flex align-items-center">
                            <h3>Flashcards</h3></div>
                        <hr className="text-white"/>
                        <div>
                            <p>
                                Le principe de la flashcard est très simple : c’est une fiche de mémorisation sous
                                forme de carte (papier ou virtuel). Sur le recto de la carte, tu notes UNE question.
                                Par exemple, quel est le théorème de Pythagore ? Quelle est la date du traité de
                                Maastricht ? Ou encore quels sont les différents muscles du bras ? Et au verso, tu
                                inscris la réponse.

                                Tu vas ensuite pouvoir utiliser tes cartes pour réviser régulièrement où tu veux et
                                quand tu veux. Dans le bus, à l’intercours ou dans la file d’attente du self, et
                                même le soir avant de te coucher.

                                En bref, un format question/réponse très efficace pour mémoriser sur le long terme
                                des dates d’histoire, des définitions en français, des formules en physique ou
                                encore réviser en anglais.
                            </p>
                        </div>
                        <hr/>
                        <div className="d-flex">
                            <h4> Listes des flashcards</h4>
                        </div>
                        <hr/>
                        <FlashCardDisplay/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage