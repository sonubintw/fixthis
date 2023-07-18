import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Grid, Button, Image, Header, Segment } from 'semantic-ui-react';
import { getRecipe } from "../services/api";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addRecipe,removeRecipe } from "../state/recipeSlice";



const RecipeDetails = ({personalRecipes,addRecipe,removeRecipe}) => {


    const [recipe, setRecipe] = useState({});

    const { recipeId } = useParams();

    const handleSaveRecipe =()=>{
        addRecipe(recipe)
    }
    const handleRemoveRecipe =()=>{
        removeRecipe(recipe.id)
    }
    const isSaved =personalRecipes.some((r)=>r.id===recipe.id);

    useEffect(() => {
        const getData = async () => {
            let result = await getRecipe(recipeId)
            if (result && result.recipe) {
                setRecipe(result.recipe);
            }
        }
        getData();
    }, [])

    return (
        Object.keys(recipe).length > 0 ? 
        <Grid container stackable columns={2} className="detailsPageContent">
            <Grid.Column>
                <Button 
                    as={Link}
                    to={'/recipes'}
                    content="Back to recipe List"
                    color="yellow"
                    style={{ marginBottom: 40 }}
                />
                <Image src={recipe.image_url} />
            </Grid.Column>
            <Grid.Column>
                <Header size="medium">{recipe.title}</Header>
                <p>Provided By: {recipe.publisher}</p>
                <Button 
                    as={"a"}
                    href={recipe.publisher_url}
                    target="_blank"
                    content="Publisher Webpage"
                    color="blue"
                />
                <Button 
                    as={"a"}
                    href={recipe.source_url}
                    target="_blank"
                    content="Recipe URL"
                    color="green"
                />
                <Header size="large" content="Ingredients" />
                <Segment.Group>
                    {
                        recipe && recipe.ingredients.map(data => (
                            <Segment>
                                <h5>{data}</h5>
                            </Segment>
                        ))
                    }
                </Segment.Group>
            </Grid.Column>
            {isSaved ? (
        <Button
          content="Remove from Personal Recipes"
          color="red"
          onClick={handleRemoveRecipe}
        />
      ) : (
        <Button
          content="Save as Personal Recipe"
          color="purple"
          onClick={handleSaveRecipe}
        />
      )}
        </Grid> : null
    )
}
const mapStateToProps = (state) => {
    return {
      personalRecipes: state.recipes.personalRecipes,
    };
  };

  export default connect(mapStateToProps, { addRecipe, removeRecipe })(RecipeDetails);