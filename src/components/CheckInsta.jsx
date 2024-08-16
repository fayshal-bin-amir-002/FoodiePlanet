import posts from "../utils/instaPost";
import InstaPostCard from "./InstaPostCard";
import viewInsta from "../assets/Group 826 copy 2.png";

const CheckInsta = () => {
    return (
        <div className="bg-[#ebfafd] py-12 md:py-14 lg:py-16 md:px-5 lg:px-10 rounded-xl">
            <div className="w-full lg:w-2/3 mx-auto text-center space-y-6 lg:space-y-8 mb-8 md:mb-10 lg:mb-12">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Check out @foodieplanet on Instagram</h3>
                <p className="text-gray-500">Follow @foodieplanet on Instagram for daily inspiration, delicious recipes, and culinary tips that will elevate your home cooking!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {
                    posts.map((post, i) => <InstaPostCard key={i} post={post}></InstaPostCard>)
                }
            </div>
            <div className="mt-6 md:mt-8 lg:mt-12 flex justify-center items-center">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={viewInsta} alt="" className="hover:scale-105 duration-500" />
                </a>
            </div>
        </div>
    );
};

export default CheckInsta;