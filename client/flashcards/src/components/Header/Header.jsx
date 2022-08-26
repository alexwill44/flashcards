import './Header.scss';
import { Link } from 'react-router-dom';

function Header(props) {

    return (
        <div className = 'header'> 
            <section>
                <span> Flashcard V.0.1.0 </span>
            </section>
            <section>
                <Link to='/create'> <button className='add'>+ Add flashcard </button></Link>
                <Link to='/'> <button className='back'>Take me HOME</button> </Link>
            </section>
        </div>
    );
}

export default Header;