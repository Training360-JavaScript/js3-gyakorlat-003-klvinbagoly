const setCookie = (key, value) => document.cookie = `${key}=${value}; expires=${new Date(new Date().setMinutes(new Date().getMinutes() + 15))}`

setCookie('viewed','5')
setCookie('uid','354774631237')
setCookie('ssid','Bx55OWbHJ0Vt_IGIF')
const cookieHandler = {
  getAll(){
    const cookiesObj = {};
    const cookiesArr = document.cookie.split('; ');
    cookiesArr.forEach(cookie => {
      const pair = cookie.split('=');
      cookiesObj[pair[0]] = pair[1];
    })
    return cookiesObj;
  },
  toSessionStorage(){
    const cookiesObj = cookieHandler.getAll();
    for (let k in cookiesObj){
      sessionStorage.setItem(k, cookiesObj[k])
    }
  },
  flush(){
    const cookiesObj = cookieHandler.getAll();
    for (let k in cookiesObj){
      document.cookie = `${k}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
    }
  }
}





export { cookieHandler };
