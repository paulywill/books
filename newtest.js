async function getUserAsync(name) {
    let response = await fetch(`https://api.github.com/users/${name}`);
    let data = await response.json()
    return data;
}

getUserAsync('paulywill')
    .then(data => console.log(data));