export interface UserAuthProps {
    email: string;
    password: string;
}

export interface UserRegisterProps {
    email: string;
    password: string;
    login: string;
}

export interface UserRegisterValidProps {
    email: string;
    code: string;
}
