export const Validation = {
    password: {
        expr: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        message: 'password.validation'
    }
};