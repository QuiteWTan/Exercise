import Typed from 'react-typed';
const FContent = () => {
    return (
        <div className='text-gray-800'>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center">
                <p className='p-1 text-2xl font-montserrat font-semibold md:py-6 HP:text-3xl'>WELCOME TO <br /><Typed strings={['OTTER','OtterEEEE','OTTERRRR']} loop typeSpeed={120} backSpeed={120} className='uppercase text-4xl font-bold HP:text-5xl'/></p>
                <h2 className="p-1 text-1xl md:text-3xl font-bold md:py-6 HP:text-2xl text font-play">Just Another Dummy Website For Otter Apocalypse</h2>
                <p className='p-4 text-1xl text-gray-600 font-bold font-play md:text-2xl md:p-2 md:py-6'>Otter is a cute but deadly mammal!</p>
                <p className="">
                    <button className="max-w-[130px] p-2 pl-4 pr-4 mt-4 border border-gray-950 text-xl hover:bg-gray-700 hover:text-white transition-all ease-linear duration-250 rounded-md">View More</button>
                </p>
            </div>
        </div>
    )
}

export default FContent;