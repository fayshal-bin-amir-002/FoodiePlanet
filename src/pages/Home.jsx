import Banner from "../components/Banner";
import Categories from "../components/Categories";
import CheckInsta from "../components/CheckInsta";
import ChefSection from "../components/ChefSection";
import SimpleTasty from "../components/SimpleTasty";
import Subscribe from "../components/Subscribe";
import TryRecipe from "../components/TryRecipe";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Categories></Categories>
            <SimpleTasty></SimpleTasty>
            <ChefSection></ChefSection>
            <CheckInsta></CheckInsta>
            <TryRecipe></TryRecipe>
            <Subscribe></Subscribe>
        </>
    );
};

export default Home;