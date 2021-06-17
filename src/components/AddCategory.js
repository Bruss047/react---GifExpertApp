import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{

        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{

        e.preventDefault();

        if(inputValue.trim().length > 2 ){

            setCategories(cats => [inputValue,...cats]); //cats es un callback que tiene el estado anterior.
            setInputValue('');

        }
        

    }

    return (

        <form onSubmit={handleSubmit}>

            <input
             type="text"
             value={inputValue}
             onChange= {handleInputChange}  //onChange se lanza (lanza un event) cada vez que el contenido del input cambie.
             />

        </form>
        
    )
}


AddCategory.propTypes={  

    setCategories: PropTypes.func.isRequired
}



