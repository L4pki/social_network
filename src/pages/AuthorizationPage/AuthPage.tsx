import React, { useState } from 'react'
import { UserAuthProps } from "../../types/user"
import "./AuthPage.scss";

const AuthPage: React.FunctionComponent = () => {

    const [user, setUser] = useState<UserAuthProps>({
        email: "",
        password: ""
    });

    return (
        <div>
            sdafdsafasdf
        </div>
    );

};

export default AuthPage;