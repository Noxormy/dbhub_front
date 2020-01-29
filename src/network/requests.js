const api = 'https://dbhub.herokuapp.com';
const createNewUser = 'create-new-user';

export async function createDatabase(setLoading) {
    setLoading(true);
    let result = await fetch(api + '/' + createNewUser);
    setLoading(false);

    if (result.ok) {
        let json = await result.json();
        localStorage.setItem('apiKey', json);
        return json;
    } else {
        console.log('HTTP Error: ' + result.status);
        throw new Error(result.statusText)
    }
}