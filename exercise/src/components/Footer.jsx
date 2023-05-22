import {AiOutlineTwitter,AiOutlineWhatsApp,AiOutlineSkype,AiOutlineInstagram} from 'react-icons/ai';
import {Link} from 'react-scroll';
import IG1 from '../assets/IG1.jpg'
import IG2 from '../assets/IG2.jpg'
import IG3 from '../assets/IG3.jpg'
import IG4 from '../assets/IG4.jpg'
import IG5 from '../assets/IG5.jpg'
import IG6 from '../assets/IG6.jpg'
import News1 from '../assets/News1.jpg'
import News2 from '../assets/News2.jpg'

const Footer = () => {
    return(
        <div className='grid max-w-[1240px] mx-auto py-16 px-4 gap-8 text-gray-800 md:grid-cols-6'>
            <div className='col-span-2'>
                <h1 className='Brand w-full text-3xl font-bold font-play text-left'> Otter</h1>
                <p className='py-4 text-xs text-left md:text-sm '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <div className='flex flex-row md:max-w-[50%] justify-between md:hidden'>
                    <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent" src=''><AiOutlineInstagram className='bg-transparent  hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                    <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent " src=''><AiOutlineWhatsApp className='bg-transparent hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                    <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent " src=''><AiOutlineTwitter className='bg-transparent hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                    <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent " src=''><AiOutlineSkype className='bg-transparent hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                </div>
            </div>

            <div className='lg:flex grid grid-cols-2 lg:grid-cols-4 col-span-0 md:col-span-4 justify-between md:gap-x-4 mt-6 col-span-2'>
                <div className=''>
                    <h4 className='font-bold text-left'>Resources</h4>
                    <ul>
                        <li className='text-left'>Help Center</li>
                        <li className='text-left'>Affiliate</li>
                        <li className='text-left'>Products Review</li>
                        <li className='text-left'>Services</li>
                    </ul>
                </div>

                <div className='max-w-[150px] md:px-2'> 
                    <h4 className='font-bold pb-2'>Latest News</h4>
                    <ul className='grid gap-y-2 grid-row-2'>
                        <li className='grid grid-cols-2 justify-center gap-x-3'>
                            <div className='max-w-[70px] h-[70px] row-span-2 col-span-1 ml-auto'><img src={News2} alt="" className='w-[70px] h-[70px] row-span-2'/></div>
                            <h1 className='text-left text-xs max-w-[100px]'>Introducing Bronson Shoes XI</h1>
                            <button className='underline text-left text-xs max-w-[80px]'>Learn More</button>
                        </li>
                        <li className='grid grid-cols-2 gap-x-3'>
                        <div className='max-w-[70px] h-[70px] row-span-2 col-span-1 ml-auto'><img src={News1} alt="" className='w-[70px] h-[70px] row-span-2'/></div>
                            <h1 className='text-left text-xs max-w-[100px]'>New Fabric Material Coming Soon</h1>
                            <button className='underline text-left text-xs max-w-[80px]'>Learn More</button>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-bold text-left mt-4 lg:mt-0'>Navigates</h4>
                    <ul className="">
                        <li className="text-left">Home</li>
                        <li className="text-left">About</li>
                        <li className="text-left">Contact</li>
                        <li className="text-left">Sign Up</li>
                        <li className="text-left">Login</li>
                    </ul>
                </div>

                <div className='max-w-[200px] mt-4 lg:mt-0 pb-2'>
                    <h4 className='font-bold'>Instagram</h4>
                    <ul className=" grid grid-cols-3 gap-x-2 gap-y-2 ">
                        <li className="max-w-[55px]"><img src={IG1} alt="" className='w-[100%] h-[55px]'/></li>
                        <li className="max-w-[55px]"><img src={IG2} alt="" className='w-[100%] h-[55px]'/></li>
                        <li className="max-w-[55px]"><img src={IG3} alt="" className='w-[100%] h-[55px]'/></li>
                        <li className="max-w-[55px]"><img src={IG4} alt="" className='w-[100%] h-[55px]'/></li>
                        <li className="max-w-[55px]"><img src={IG5} alt="" className='w-[100%] h-[55px]'/></li>
                        <li className="max-w-[55px]"><img src={IG6} alt="" className='w-[100%] h-[55px]'/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;