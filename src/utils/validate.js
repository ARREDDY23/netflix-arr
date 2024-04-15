
export const validateSignFormFeilds = (email, password) => {
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/.test(password);

    if(!isEmailValid) return "Invalid Email / Password"
    if(!isPasswordValid) return "Invalid Email / Password"

    return null;
}