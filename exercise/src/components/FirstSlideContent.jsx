import Typed from 'react-typed';
const FContent = () => {
    return (
        <div className='text-gray-800'>
            <div className="max-w-[800px] mt-[-100px] w-full h-screen mx-auto flex flex-col justify-center">
                <p className='p-1 text-2xl font-montserrat font-semibold md:py-6 HP:text-3xl'>WELCOME TO <br /><Typed strings={['OTTER','Otteree','OTTERRRR']} loop typeSpeed={120} backSpeed={120} className='uppercase text-4xl font-bold HP:text-5xl'/></p>
                <h2 className="p-1 text-2xl py-6 md:text-6xl font-bold md:py-2 HP:text-3xl text font-caveat">World Class Fashion Design</h2>
                <h3 className='w-p-1 text-1xl py-6 text-gray-600 font-bold font-play md:text-2xl md:py-2'><span className='text-2xl md:text-3xl'>Get Up To </span> <br /><span className='text-7xl font-poppins font-bold text-red-800'>40%</span><span className='italic text-3x text-red-800'> OFF</span> <br />This Summer!</h3>
                <p className="">
                    <button className="p-2 pl-4 pr-4 mt-4 border border-gray-950 text-xl hover:bg-gray-800 hover:text-white hover:text-opacity-75 transition-all ease-linear duration-250 rounded-md">View More</button>
                </p>
            </div>
        </div>
    )
}

export default FContent;