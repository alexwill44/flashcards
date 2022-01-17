import './Header.scss';
import { useEffect } from 'react';

function Header(props) {

    

    return (
        <div className = 'header'> 
            <section>
                <span> card: ### card ID</span>
            </section>
            <section>
                <span> + add new flashcard (linkto)</span>
                <span> - delete this flashcard(linkto)</span>
            </section>
        </div>
    );
}

export default Header;