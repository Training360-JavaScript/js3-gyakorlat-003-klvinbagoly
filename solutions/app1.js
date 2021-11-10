const setCookie = str => document.cookie = `token=${str}; expires=${new Date(new Date().setMinutes(new Date().getMinutes() + 15))}`





export default setCookie;
