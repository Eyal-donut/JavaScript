function searchToLink(search){
    const key = 'c4174cd'
    return `http://www.omdbapi.com/?t=${search}&apikey=${key}`
}
console.log(searchToLink('alice in wonderland'))