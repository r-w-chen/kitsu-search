const fetch = require('node-fetch');
const url2 = `https://kitsu.io/api/edge/anime?fields[attributes]=canonicalTitle`;
const fetchTitle = async (titleName) => {
    
    let searchKeyWord = titleName.toLowerCase().split(' ').join('-');
    let url = `https://kitsu.io/api/edge/anime?filter[slug]=${searchKeyWord}`
  
    try {
        // let animeObj = (await (await fetch(url2)).json()).data[0].attributes;
        let animeObj = (await (await fetch(url2)).json()).data;
        // let imgURL = animeObj.posterImage.small;
        console.log(animeObj);
        // console.log(imgURL);
        // console.log(animeObj.canonicalTitle);
        // console.log(animeObj.synopsis);


    } catch(err) {
        console.log(err);
    }   

}

fetchTitle('gurren lagann');