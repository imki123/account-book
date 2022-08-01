import Cookies from 'js-cookie'

export const getCookieFe = () => {
  return Cookies.get('fe_accountBook_access_token')
}
export const setCookieFe = (token: string) => {
  Cookies.set('fe_accountBook_access_token', token, {
    expires: 7,
  })
}
export const removeCookieFe = () => {
  Cookies.remove('fe_accountBook_access_token')
}
