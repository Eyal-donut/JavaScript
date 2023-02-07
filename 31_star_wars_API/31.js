// const data = {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     hair_color: "blond",
//     skin_color: "fair",
//     eye_color: "blue",
//     birth_year: "19BBY",
//     gender: "male",
//     homeworld: "https://swapi.dev/api/planets/1/",
//     films: [
//       "https://swapi.dev/api/films/1/",
//       "https://swapi.dev/api/films/2/",
//       "https://swapi.dev/api/films/3/",
//       "https://swapi.dev/api/films/6/"
//     ],
//     species: [],
//     vehicles: [
//       "https://swapi.dev/api/vehicles/14/",
//       "https://swapi.dev/api/vehicles/30/"
//     ],
//     starships: [
//       "https://swapi.dev/api/starships/12/",
//       "https://swapi.dev/api/starships/22/"
//     ],
//     created: "2014-12-09T13:50:51.644000Z",
//     edited: "2014-12-20T21:17:56.891000Z",
//     url: "https://swapi.dev/api/people/1/"
//   }

// const planetData ={
//     name: "Tatooine",
//     rotation_period: "23",
//     orbital_period: "304",
//     diameter: "10465",
//     climate: "arid",
//     gravity: "1 standard",
//     terrain: "desert",
//     surface_water: "1",
//     population: "200000",
//     residents: [
//       "https://swapi.dev/api/people/1/",
//       "https://swapi.dev/api/people/2/",
//       "https://swapi.dev/api/people/4/",
//       "https://swapi.dev/api/people/6/",
//       "https://swapi.dev/api/people/7/",
//       "https://swapi.dev/api/people/8/",
//       "https://swapi.dev/api/people/9/",
//       "https://swapi.dev/api/people/11/",
//       "https://swapi.dev/api/people/43/",
//       "https://swapi.dev/api/people/62/"
//     ],
//     films: [
//       "https://swapi.dev/api/films/1/",
//       "https://swapi.dev/api/films/3/",
//       "https://swapi.dev/api/films/4/",
//       "https://swapi.dev/api/films/5/",
//       "https://swapi.dev/api/films/6/"
//     ],
//     created: "2014-12-09T13:50:49.641000Z",
//     edited: "2014-12-20T20:58:18.411000Z",
//     url: "https://swapi.dev/api/planets/1/"
//   }

const charactersArray = [];
const table = document.querySelector('table')

const getCharactersInfo = async (characterNum) => {
    try {
          const response = await fetch(`https://swapi.dev/api/people/${characterNum}`)

          if(!response.ok) throw new Error('Something went wrong')
        
          const data = await response.json()
        

         const response2 = await fetch(data.homeworld)
        
         if(!response2.ok) throw new Error('Something went wrong')
        
         const planetData = await response2.json()

        characterObj = {
            name: data.name,
            height: data.height,
            hairColor: data.hair_color,
            planet: planetData.name,
            planetPopulation: planetData.population
        }

        charactersArray.push(characterObj)

        
        const newRow = document.createElement('tr')
        newRow.innerHTML = `<td>${data.name}</td>
        <td>${data.height}</td>
        <td>${data.hair_color}</td>
        <td>${planetData.name}</td>
        <td>${planetData.population}</td>`
        table.append(newRow)
        


        console.log(charactersArray)

    } catch (error) {
        console.log(error)
        
    }
}

function callGetCharacterInfo(startingNum, endNum){
    for(let i = startingNum; i <= endNum; ++i) getCharactersInfo(i)
}

callGetCharacterInfo(1, 10)
