export interface UserAuthProps {
    email: string;
    password: string;
}

export interface UserRegistProps {
    email: string;
    password: string;
    login: string;
}

export interface UserRegistValidProps {
    email: string;
    code: string;
}