import Cookies from 'js-cookie'

const KEYS = [
    'id',
    'name',
    'email',
    'active'
]

export function cookieSetAuthInfo (authInfo) {
    // let cookieConfig = {
    //     path: '/',
    //     domain: DOMAIN,
    //     secure: false
    // }
    console.log(authInfo)
    KEYS.forEach(KEY => {
        Cookies.set(KEY, authInfo[KEY])
    })
}
export function cookieGetAuthInfo () {
    let authInfo = new Object()
    KEYS.forEach(KEY => {
        authInfo[KEY] = Cookies.get(KEY)
    }) 
    return authInfo
}
export function clearAuthInfo() {
    KEYS.forEach(KEY => {
        Cookies.remove(KEY)
    })
}
export function isLogined() {
    return Cookies.get('id')
}