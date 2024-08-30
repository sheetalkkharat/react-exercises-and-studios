import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";
import SaveButton from "./components/SaveButton";
import ClickedButton from "./components/ClickedButton";

export default function App() {
  return (
    <>
      <RecipeImage />
      <RecipeName />
      <RateARecipe rating={4} />
      <RateARecipe rating={5} />
      <Button saveButton={true} />
      <AuthorInfo />
      <IngredientList />
      {/* <ClickedButton /> */}
    </>
  );
}
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 