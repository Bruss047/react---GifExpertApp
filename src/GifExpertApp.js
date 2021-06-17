import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp=()=>{

    const [categories, setCategories] = useState(['Batman']);

    // const handleAdd=()=>{

    //     setCategories([...categories, 'NightCrawler']);

    // }

     return (
     
       <>
           <h2>Gif Expert App</h2>

           <AddCategory setCategories={setCategories} />

           <hr/>
           

                 {
                    categories.map( category => (
                        
                       <GifGrid 
                            key={category}
                            category={category} 
                        />
                        //return <li key={category}>{category}</li> //el key es necesario para que React sepa espeficamente que componente cambio su estado al renderizar nuevamente.
                 )) //parentesis para indicar que estamos retornando un objeto.

                }

         
           
        </>  )

    
}

//export default GifExpertApp;