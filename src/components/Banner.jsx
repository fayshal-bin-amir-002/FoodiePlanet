import { Link } from "react-router-dom";
import bannerImage from "../assets/bannerImage.png";
import hotRecipe from "../assets/Group 827.png";
import viewRecipe from "../assets/Group 826.png";
import { BsStopwatchFill } from "react-icons/bs";
import { TbToolsKitchen } from "react-icons/tb";

const Banner = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row rounded-3xl overflow-hidden" >
            <div className="w-full lg:w-1/2 bg-[#e7f9fd] p-4 md:p-8 lg:p-12">
                <>
                    <img src={hotRecipe} alt="" className="bg-white px-6 py-3 rounded-full" />
                </>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium py-6 md:py-8 lg:py-10">
                    Spicy delicious chicken wings
                </h1>
                <p className="text-gray-500 mb-6 lg:mb-8">Welcome to FoodiePlanet – A culinary journey across the globe! Discover an eclectic mix of flavors and dishes inspired by the world&apos;s most beloved cuisines. From sizzling street food to gourmet delicacies, our menu offers something for every palate. Indulge in a feast of taste, quality, and tradition, all in one place. Explore our chef&apos;s special creations, seasonal delights, and the freshest ingredients, all served with love and passion. Join us at FoodiePlanet, where every meal is a celebration of food and culture.</p>
                <div className="flex justify-start items-center gap-7 mb-6 lg:mb-8">
                    <p className="flex items-center gap-1 px-2 py-1 bg-gray-200/80 rounded-full"><BsStopwatchFill className="inline" /> 30 Minutes</p>
                    <p className="flex items-center gap-1 px-2 py-1 bg-gray-200/80 rounded-full"><TbToolsKitchen className="inline" /> Chicken</p>
                </div>
                <Link to={"/view-recipes"}>
                    <img src={viewRecipe} alt="" className="hover:scale-105 duration-700" />
                </Link>
            </div>
            <div className="w-full lg:w-1/2 overflow-hidden">
                <img src={bannerImage} alt="" className="object-cover w-full h-full" />
            </div>
        </div>
    );
};

export default Banner;