
import { useFavoriteContext } from './../../contexts/Favorites.js';

function Favoritos() {

    const { favorite } = useFavoriteContext()

    return (
        <div>
                    <h2>Meus Favoritos</h2>
                    
        </div>
    );
}

export default Favoritos;