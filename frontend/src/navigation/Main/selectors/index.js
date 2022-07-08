export const getUser = (state) => state.main?.user
export const getUserIsActivated = (state) => state.main?.user?.user?.isActivated || false
export const getMember = (state)=> state.members?.member
