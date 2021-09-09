const itemDOM = document.querySelector('.item-container')

const fetchUrl = (id) =>
    fetch(`http://rpg-api.com/weapons/${id}`)
        .then(response => response.json())
        .then(data => getFetched(data));
const getFetched = (item) => {
    var element = document.createElement("a")
    element.classList.add('col-2')
    element.innerHTML = `
    <div class="d-flex item-barrel">
    <h2 id="itemDisplay-2"> ${item.name} </h2>
    <div class="square-box mb-4 mt-4">
    <img id="wpn-image" src="${item.imageUrl}" alt="">
    </div>
    </div>`
    itemDOM.appendChild(element);
}

for(let itemCount=0; itemCount<25; itemCount++){
    fetchUrl(itemCount);
}