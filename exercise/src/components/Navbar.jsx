import { useState } from "react"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const ChangeStyles = ['fixed flex left-[-65%] top-0 h-full border-r border-r-gray-900 bg-gray-500 ease-in-out duration-500','fixed flex left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-gray-500 ease-in-out duration-500 justify-center HP:w-[30%]'];
    const [Change, setChange] = useState(0);
    const [ChangeIcon, setChangeIcon] = useState(true);

    const ClickNav = () => {
        setChange( (Change + 1) % ChangeStyles.length);
        setChangeIcon(!ChangeIcon);
    }

    return(
        <div className="flex justify-between items-center h-20 max-w-[1800px] mx-auto px-4">
            <h3 className="w-full text-4xl font-bold font-play text-left">Otter</h3>
            <ul className="md:flex hidden">
                <li className="p-3">Home</li>
                <li className="p-3">About</li>
                <li className="p-3 mr-10">Contact</li>
                <li className="flex text-white bg-gray-500 p-1 mt-2 rounded-xl h-8 w-24 justify-center">Sign in</li>
                <li className="p-3">Register</li>
            </ul>
            <div onClick={ClickNav} className="md:hidden">
                {ChangeIcon ? <AiOutlineMenu size={20} className=" transition-transform"/> : <AiOutlineClose size={20} className="transition-transform"/>}
            </div>
            <div className={ChangeStyles[Change]} >
                <h3 className="pt-2 text-4xl font-bold font-play fixed bg-gray-500 text-center ml-5">Otter</h3>
                <ul className="pt-20 ml-5 bg-gray-500 ">
                    <li className="p-3 bg-gray-500 ">HOME</li>
                    <li className="p-3 bg-gray-500 ">ABOUT</li>
                    <li className="p-3 bg-gray-500 ">CONTACT</li>
                    <li className="p-3 bg-gray-500 ">SIGN IN</li>
                    <li className="p-3 bg-gray-500 ">REGISTER</li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar;