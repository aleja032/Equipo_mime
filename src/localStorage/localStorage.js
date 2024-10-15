// localStorage.js
export const saveLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const loadLocalStorage = (key) => {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : [];
};

export const clearLocalStorage = () => {
    localStorage.clear();
};
