import { Link } from "react-router-dom";

export default function Header() {
    return ( 
        <header>
            <h1>Bienvenue sur l'application WeatherPlan, qui finalement va servir de carte du monde</h1>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/all_countries">Tous les pays</Link></li>
                </ul>
            </nav>
        </header>)
}