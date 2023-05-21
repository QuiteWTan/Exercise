const ContactSection = () => {
    return(
        <div className="w-full py-16 text-white bg-gray-500">
            <div className="max-w-[1240px] grid md:grid-cols-2 bg-gray-500">
                <div className="flex flex-col col-span-3 bg-gray-500 px-10 md:px-4 w-full">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold py-2 text-black text-left bg-gray-500 font-play">Have any suggestion on our website optimization?</h1>
                    <p className="text-black text-left bg-gray-500 font-poppins text-lg">Kindly send your email to us, we'll contact you definitely!</p>
                </div>
                <div className="my-4 flex flex-col w-full md:flex-row items-center justify-between bg-gray-500 px-10 md:px-4 ">
                    <input type="email" name="" id="" placeholder="Enter Your Email!" className="text-black  bg-white p-3 flex w-full rounded-md "/>
                    <button className="w-full bg-gray-800 text-sm text-white hover:bg-gray-700  hover:text-opacity-75 ease-linear duration-250 rounded-md py-3 sm:text-md md:text-xl md:p-3 my-6 px-6 md:py-2 md:px-0 md:w-[200px] md:ml-4">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;