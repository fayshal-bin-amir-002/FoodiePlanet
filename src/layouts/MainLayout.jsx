import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import Container from "../components/shared/Container";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="font-roboto">
            <Container>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default MainLayout;