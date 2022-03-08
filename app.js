let launches = [];

const loadData = () => {
    console.log("loading data");
    fetch("https://api.spacexdata.com/v5/launches")
        .then(result => result.json())
        .then(data => launches = data)
        .then(() => {

            const list = document.querySelector("#spaceX-list");

            // launches.forEach(spacex => {
            //     const listItem = document.createElement("li");
            //     listItem.innerText = spacex.links.article;
            //     list.appendChild(listItem);
            // })

            launches.forEach(spacex => {
                const listItem = document.createElement("li");
                listItem.innerText = spacex.links.patch.large;
                list.appendChild(listItem);

            })
            

        })
        .catch(error => console.error("something broke"))
}
loadData();