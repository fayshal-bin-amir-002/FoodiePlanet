import img1 from "../assets/image 26.png";
import img2 from "../assets/image 26 (1).png";
import img3 from "../assets/Mask Group.png";
import img4 from "../assets/image 26 (2).png";
import img5 from "../assets/Mask Group (1).png";
import img6 from "../assets/Mask Group (2).png";
import SimpleTastyCard from "./SimpleTastyCard";

const SimpleTasty = () => {

    const cardsData = [
        {image: img1, name: "Big and Juicy Wagyu Beef Cheeseburger", time: 30, item: 'Snack'},
        {image: img2, name: "Fresh Lime Roasted Salmon with Ginger Sauce", time: 30, item: 'Fish'},
        {image: img3, name: "Strawberry Oatmeal Pancake with Honey Syrup", time: 30, item: 'Breakfast'},
        {image: img4, name: "Chicken Meatballs with Cream Cheese", time: 30, item: 'Meat'},
        {image: img5, name: "Fruity Pancake with Orange & Blueberry", time: 30, item: 'Sweet'},
        {image: img6, name: "The Best Easy One Pot Chicken and Rice", time: 30, item: 'Snack'},
    ]

    return (
        <div>
            <div className="w-full lg:w-1/2 mx-auto space-y-6 lg:space-y-8 mb-10 md:mb-12 lg:mb-16 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Simple and tasty recipes</h2>
                <p className="text-gray-500">Explore quick, easy, and delicious recipes that bring out the best flavors with minimal effort. Perfect for everyday cooking!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {
                    cardsData.map((card, i) => <SimpleTastyCard key={i} card={card}></SimpleTastyCard>)
                }
            </div>
        </div>
    );
};

export default SimpleTasty;