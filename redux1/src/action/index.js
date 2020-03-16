const url = "http://localhost:8900";

export function latestNews(){
    const output = fetch(`${url}/articles?_end=3`, {method:'GET'})
    .then((data) => data.json())
    
    return {
        type:'GET_LATEST',
        payload:output
    }
}

// Article news

export function articleNews(){

    const art_output = fetch(`${url}/articles?_start=4&_end=10`, {method: 'GET'})
    .then((data) => data.json())

    return {
        type: 'GET_ARTICLE',
        payload: art_output
    }
}

export function  gallery(){

    const gallery = fetch(`${url}/galleries?_limit=2`, {method: 'GET'})
    .then((data) => data.json())

    return {
        type: 'GET_GALLERY',
        payload: gallery
    }
}