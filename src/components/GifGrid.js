import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) =>{

    // const apiKey='hZ5gChjeaiUYJQq5MKarkcgfydqMDh7r';
    //     const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    // const [images, setImages] = useState([]);

    

    const {data:images, loading} = useFetchGifs(category); //'data:images' : para renombrar la variable.

    
        return(
            <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
    
                {loading && <p>Loading</p>}
                
                <div className="card-grid">
                    {
                        images.map( img => (

                            <GifGridItem 
                              key={img.id}
                              {...img} /> //envia cada una de las propiedades de las imagenes como una propiedad independiente.
                        ))  // () return implicito
                         

                    }
              
                </div>
   

            </>
        );



}