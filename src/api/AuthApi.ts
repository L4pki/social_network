import { UserRegisterProps, UserRegisterValidProps } from "../types/User";
import axiosInstance from "./AxiosInstance";

export const userRegistration = async (userData: UserRegisterProps) => {
    try {
        const response = await axiosInstance.post("/registration/send-email", userData);
        
        if (response.data.access === true) {
            console.log("Доступ разрешен");
        } else {
            console.log("Доступ не разрешен");
        }
    } catch (error) {
        console.error("Ошибка при регистрации:", error);
    }
};

export const userValidateCode = async (userData: UserRegisterValidProps) => {
    try {
        const response = await axiosInstance.post("/registration/validate-code", userData);

        if (response.data.access === true) {
            localStorage.setItem("accessToken", response.data.tokens.accessToken);
            localStorage.setItem("refreshToken", response.data.tokens.refreshToken);
            console.log("Регистрация прошла успешно");
        } else {
            console.log("Не валидный код");
        }
    } catch (error) {
        console.error("Ошибка при регистрации: ", error);
    }
}
