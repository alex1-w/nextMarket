export interface ILoginForm {
    login: string;
    password: string;
}

export interface ISignInForm extends ILoginForm {
    repeatPassword: string;
}