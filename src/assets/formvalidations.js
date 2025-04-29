
export const SignInDataValidation = (email, password)=>{
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);

    if (!isEmailValid) return ("Invalid email format.");
    if (!isPasswordValid) return ("Password must be at least 8 characters long and contain both letters and numbers.");

    return ("null")
}
export const SignUpDataValidation = (email, password,confirmPassword)=>{
    
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);

    if (!isEmailValid) return ("Invalid email format.");
    if (!isPasswordValid) return ("Password must be at least 8 characters long and contain both letters and numbers.");
    if (password !== confirmPassword) return ("Passwords do not match.");
    return ("null")
}
export const EmailOnlyValidation = (email)=>{
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isEmailValid) return ("Invalid email format.");
    return ("null")
}
