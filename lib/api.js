export async function fetcher(url, options = {} ) {
    let response;
    if (!options) {
        response = await fetch(url);
    } else {
        response = await fetch(url, options);
        console.log(response)
    }
    const data = await response.json();
    return data;
}