const Subscribe = () => {
    return (
        <div className="bg-[#e7f9fd] py-8 md:py-10 lg:py-14 w-full rounded-3xl shadow-md mb-12 md:mb-16 lg:mb-20 px-4">
            <div className="w-full lg:w-1/2 mx-auto text-center">
                <h3 className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-5'>Deliciousness to your inbox</h3>
                <p className="text-gray-500 mb-8 md:mb-10 lg:mb-12">Get deliciousness delivered to your inbox! Sign up for mouthwatering recipes, culinary tips, and foodie inspiration straight to your email.</p>
                <form className="w-full lg:w-3/4 mx-auto relative">
                    <input type="text" name="" id="" className="w-full px-6 py-4 rounded-3xl" placeholder="Your email address..." />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white rounded-3xl px-4 py-2">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;