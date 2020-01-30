const api = 'https://dbhub.herokuapp.com';
const createNewUser = 'create-new-user';


export async function loadApiKey(setLoading) {
    setLoading(true);
    let apiKey = await createDatabase();
    setLoading(false);
    return apiKey
}


async function createDatabase() {
    let result = await fetch(api + '/' + createNewUser);

    if (result.ok) {
        let json = await result.json();
        localStorage.setItem('apiKey', json);
        return json;
    } else {
        throw new Error(result.statusText)
    }
}