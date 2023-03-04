import './App.css';
import {Link, NavLink, Outlet} from 'react-router-dom';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate();
console.log("toto");
    const flashLength = useSelector(state => state.flash.flashCards).length;


    function RandomFlashCard() {

        const random = Math.floor(Math.random() * flashLength) + 1;

        console.log(random);
        navigate(`/flashcard/${random}`);
    }

    const findFlashById = () => {
        const input = document.getElementById("find").value;
        console.log(input);
        navigate(`/flashcard/${input}`);
    }

        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        {/* Si l'on veut passer d'une page à l'autre, il faut éviter l'utilisation de la balise <a> et provilégier la balise <Link>
            qui est un composant disponible dans React-Router-DOM perettant le routing sans rafraichissement de la page */}
                        <Link className="navbar-brand" to="/"><i className="bi bi-globe"></i>Accueil eFlashcard</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                {/* Si l'on veut un rendu conditionnel basé sur la présence d'une classe .active alors on peut utiliser les NavLink, qui vont ajouter cette classe à notre élément en cas de route correspondante à l'attribut 'to' */}
                                <NavLink className="nav-link" to="/add-flash"><i className="bi bi-plus-circle me-2"></i>Ajouter
                                    une Flashcard</NavLink>
                                {/*<NavLink className="nav-link" to={`/flashcard/${random}`}><i*/}
                                {/*    className=<i>"bi bi-shuffle me-2"></i>Flashcard au hasard</NavLink>*/}
                                <button style={{textDecoration:"none", cursor:"pointer"}} className="btn btn-link" onClick={RandomFlashCard}><i
                                    className="bi bi-shuffle me-2"></i>Flashcard au hasard</button>
                                <input type="text" className="rounded m-2" placeholder="Rechercher une flashcard" id="find"/>
                                <button onClick={findFlashById } type="button" className="btn btn-primary">GO</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="container">
                    <Outlet/>
                </main>

            </div>
        );
    }
export default App;
