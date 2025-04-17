"use server"
const TokenEx = () => {
  return  localStorage.getItem('token') || ""
}

export default TokenEx