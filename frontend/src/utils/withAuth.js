import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const navigate = useNavigate();

        useEffect(() => {
            if (!localStorage.getItem("token")) {
                navigate("/auth");
            }
        }, [navigate]); // Added navigate in dependency array

        return <WrappedComponent {...props} />;
    };

    return AuthComponent;
};

export default withAuth;
