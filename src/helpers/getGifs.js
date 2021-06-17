
export const getGifs = async (category) =>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=hZ5gChjeaiUYJQq5MKarkcgfydqMDh7r&q=${ encodeURI(category)}}&limit=8`; //encodeURI = para saltear espacios en la url. 
    const resp = await fetch(url);
    const {data} =await resp.json();

    const gifs = data.map( img=>{

        return{

            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // ? = si vienen imagenes que las mueste.

        }

    });

    return gifs;

    };