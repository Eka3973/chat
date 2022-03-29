export const getUser = (state) => state.main.user.userData
export const getUserIsActivated = (state) => state.main.user.userData?.user?.isActivated || false
