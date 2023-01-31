export const getLocalStorage = (name) => 
    JSON.parse(window.localStorage.getItem(name) || []);
    
export const setLocalStorage = (name, keyValue) => 
    window.localStorage.setItem(name, JSON.stringify(keyValue)
);

