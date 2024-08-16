import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import Container from "../components/shared/Container";

const MainLayout = () => {
    return (
        <div className="font-roboto">
            <Container>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default MainLayout;