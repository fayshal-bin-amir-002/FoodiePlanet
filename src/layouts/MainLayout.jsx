import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";

const MainLayout = () => {
    return (
        <div className="font-roboto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;