import {AiOutlineTwitter,AiOutlineWhatsApp,AiOutlineSkype,AiOutlineInstagram} from 'react-icons/ai';
import {Link} from 'react-scroll';

const SocialContact = () => {
    return(
    <nav className="fixed top-[30%] right-[0%] overflow-hidden rounded-md">
        <div className="container mx-auto">
            <div className="w-full bg-gray-600 flex-col mx-auto items-center justify-between max-w-[80px] h-[300px] text-white backdrop-blur-2xl text-2xl hidden sm:flex">
                <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent" src=''><AiOutlineInstagram className='bg-transparent  hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent " src=''><AiOutlineWhatsApp className='bg-transparent hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent " src=''><AiOutlineTwitter className='bg-transparent hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent " src=''><AiOutlineSkype className='bg-transparent hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
            </div>
        </div>
    </nav>
    )
}

export default SocialContact;