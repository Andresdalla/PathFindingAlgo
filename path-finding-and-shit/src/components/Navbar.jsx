import React, { useState } from 'react';
import Logo from '../assets/logo2.svg';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[70px] flex justify-center items-center px-4 bg-[#222831] z-50'>
            <div className='flex justify-center'>
                <img className='' src={Logo} alt="Imagen nombre" width={300} />
            </div>
        </div>
    );
};

export default Navbar;