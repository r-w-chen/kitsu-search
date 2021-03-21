let titleText = document.createElement('h1');
let img = document.createElement('img');
let synopsis = document.createElement('p');
let searchDiv = document.querySelector('#search');
searchDiv.append(titleText, img, synopsis);

const fetchTitle = async (titleName) => {
    
    let searchKeyWord = titleName.toLowerCase().split(' ').join('-');
    let url = `https://kitsu.io/api/edge/anime?filter[slug]=${searchKeyWord}`
  
    try {
        let animeObj = (await (await fetch(url)).json()).data[0].attributes;
        // let animeObj = (await (await fetch(url)).json()).data;
        let imgURL = animeObj.posterImage.small;
        console.log(animeObj);
        console.log(imgURL);
        console.log(animeObj.canonicalTitle);
        console.log(animeObj.synopsis);
        titleText.innerText = animeObj.canonicalTitle;
        img.src = imgURL;
        synopsis.innerText = animeObj.synopsis;

    } catch(err) {
        console.log(err);
    }   

}

document.querySelector('#search-button').addEventListener('click', e => {
    e.preventDefault();
    const searchInput = document.querySelector('#search-bar');
    fetchTitle(searchInput.value);
    searchInput.value = '';
})