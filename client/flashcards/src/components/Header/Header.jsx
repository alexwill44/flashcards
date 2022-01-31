import './Header.scss';
import { Link } from 'react-router-dom';

function Header(props) {

    return (
        <div className = 'header'> 
            <section>
                <span> card: ### card ID</span>
            </section>
            <section>
                <Link to='/create'> <button className='add'>+ Add flashcard </button></Link>
                <Link to='/'> <button className='back'>Take me HOME</button> </Link>
                <span> ! Edit </span>
            </section>
        </div>
    );
}

export default Header;