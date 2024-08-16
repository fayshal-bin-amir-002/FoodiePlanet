import items from "../utils/tryRecipes";
import SimpleTastyCard from "./SimpleTastyCard";

const TryRecipe = () => {
    return (
        <div className="my-12 md:my-16 lg:my-20">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8 md:mb-10 lg:mb-14">
                <h3 className='text-3xl lg:text-5xl w-full lg:w-[40%]'>Try this delicious recipe
                to make your day
                </h3>
                <p className='text-gray-500 w-full lg:w-1/2'>Try this delicious recipe to elevate your day with mouthwatering flavors. Simple to prepare, yet packed with taste, it&apos;s the perfect way to indulge yourself!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    items.map((item, i) => <SimpleTastyCard key={i} card={item}></SimpleTastyCard>)
                }
            </div>
        </div>
    );
};

export default TryRecipe;