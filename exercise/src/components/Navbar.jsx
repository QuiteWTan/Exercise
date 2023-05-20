import { useState } from "react"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [Change, SetChange] = useState('');

    return(
        <div className="flex justify-between items-center h-24 max-w-[1520px] mx auto px-4 place-items-center">
            <h3 className="w-full text-3xl font-bold">Title</h3>
            <ul className="flex hidden">
                <li></li>
            </ul>
            <div>
                <AiOutlineMenu size={20}/>
            </div>

        </div>

    );
}

export default Navbar;