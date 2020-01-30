export function loadApiKeyFromLocalStorage() {
    try {
        return localStorage.getItem('apiKey');
    }
    catch (e) {
        console.log(e);
        return null;
    }
}