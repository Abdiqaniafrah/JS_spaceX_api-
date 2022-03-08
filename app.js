let launches = [];

const loadData = async () => {
    console.log("loading data");
    fetch("https://api.spacexdata.com/v5/launches")
    .then(result => result.json())
    .then(data => launches = data)
    .then(()=> {
        const list = document.querySelector("#spaceX-list")
    });


    launches.forEach(space =>{
        const listItem = document.createElement("li")
        listItem.innerText = space.fairings.article;
        list.appendChild(listItem)
    })

}
loadData();



// let countries = [];
// // fetch 
// const loadData = async () => {
//     console.log("loading data");
// fetch ("https://restcountries.com/v3.1/all")
// once you have resolved the error what happens next 
// result.json - strips the countries data 
    // .then(result => result.json())
    // // sets the countries to the data
    // .then (data => countries = data)
    // .then (() => {
    //     const list = document.querySelector("#country-list")
        
        // // mapping array of countries names
        // // for everything in that country , put that country name and property and put in that array 
        // const countryNames = countries.map(country => country.name.official)
        // //  print out string we have 
        // countryNames.forEach ((name) => {
        //     const listItem = document.createElement("li")
        //     listItem.innerText = name;
        //     list.appendChild(listItem)

    //     countries.forEach(country => {
    //         const listItem = document.createElement("li");
    //         listItem.innerText = country.name.official;
    //         list.appendChild(listItem);

    //     })

    //     });
    // }
// // render - display on page 
// const renderData = async () => {
//     await loadData();
//     const list = document.querySelector("#country-list")

//     // 2 step process - take countries, take name info - then take names and create new array of country names

//     const countryName = countries.map(country => country.name.official)
//     console.log(countryNames);
// }
// loadData();
