export const getRegistrationError = (state)=> state.auth.registration.error
export const getRegistrationValue = (state)=> state.auth.registration.value

export const getLoginValue = (state)=> state.auth.login.value
export const getLoginError = (state)=> state.auth.login.error

export const getRegistrationIsLoading = (state)=> state.auth.registration.isLoading
export const getLoginIsLoading = (state)=> state.auth.login.isLoading
