import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, url}) => {
    const openRecipe = () => {
        window.open(`${url}`);
    }

    return(
        <div className={`${style.recipe} ${style.overlay}`}>
            <img className={style.image} src={image} alt=""/>
            <div className={style.hoverDisplay}>
                {ingredients.map(ingredient => (
                    <li className={style.text}>{ingredient.text}</li>
                ))}
                <button className={style.button} onClick={openRecipe}>View Recipe</button>
            </div>
            
            <h1>{title}</h1>
        </div>
    )
}

export default Recipe;