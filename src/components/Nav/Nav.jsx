import { useState } from 'react';
import { Spiral as Hamburger } from 'hamburger-react'
import './Nav.css';

export default function Nav({ setCurrentPage }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color='#84A491'
                size={40}
            />
            {isOpen ? ( <div className="nav">
                <ul>
                    <li>home</li>
                    <li>work</li>
                    <li>contact</li>
                </ul>
            </div> ) : ( <></> )}
        </>
    );
}