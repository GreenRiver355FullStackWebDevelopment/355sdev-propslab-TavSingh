import Recipe from "./Recipe.jsx";
import {Grid} from "@mui/material";

const RecipeContainer = ({recipes}) => {
    return (
        <Grid container alignItems={"center"} justifyContent={"space-around"}>

            {
                recipes.map((recipe, index) => (
                    <Recipe key ={`${index}${recipe.name}`}
                    recipe = {recipe.name}
                    ingredients = {recipe.ingredients} 
                    instructions = {recipe.instructions}
                    />
                ))
            }
        </Grid>
    );
}

export default RecipeContainer;