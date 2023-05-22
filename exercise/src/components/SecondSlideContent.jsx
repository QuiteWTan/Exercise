import Card1 from '../assets/FashionHomeStore.jpg'
import Card2 from '../assets/Clothes1.jpg'
import Card3 from '../assets/Clothes2.jpg'
const SContent = () => {
    return(
        <div className='w-full py-20 px-4 '>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 p-4'>
                <div className='max-w-[550px] md:ml-0'>
                    <div className='max-w-[550px] grid grid-cols-[repeat(minmax(50px,1fr))] gap-x-2 gap-y-2 p-2 mx-auto justify-center items-center'>
                        <img src={Card1} alt="" className='col-span-2 w-full max-h-[550px]'/>
                        <img src={Card2} alt="" className='w-full max-h-[150px]'/>
                        <img src={Card3} alt="" className='w-full max-h-[150px]'/>
                    </div>
                </div>
                <div className='flex flex-col justify-center px-0  md:px-2 md:text-center pt-5 md:pt-0'>
                    <p className='text-lg text-left md:text-1xl lg:text-4xl font-play'>Meet the Otter Store!</p>
                    <h1 className='text-bold text-3xl md:text-4xl lg:text-7xl text-left'>About Us</h1>
                    <p className='py-4 text-xs sm:text-sm md:text-lg text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <button className="max-w-[180px] p-1 mt-4 border bg-gray-800 text-md text-white hover:bg-gray-700  hover:text-opacity-75 transition-all ease-linear duration-250 rounded-md md:text-xl md:p-2 md:pl-4 md:pr-4">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default SContent;