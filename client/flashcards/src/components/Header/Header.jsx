import './Header.scss';
import { Link } from 'react-router-dom';

function Header(props) {

    return (
        <div className = 'header'> 
            <section>
                <span> card: ### card ID</span>
            </section>
            <section>
                <Link to='/create'> + Add flashcard </Link>
                <span> - delete this flashcard(linkto)</span>
            </section>
        </div>
    );
}

export default Header;