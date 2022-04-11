import { useAppContext } from "../context/appContext";

const NavbarUserAvatar = () => {
    const [state] = useAppContext();
    return <img src={state.user.avatar} />;
};

export default NavbarUserAvatar;
