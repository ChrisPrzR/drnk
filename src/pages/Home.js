import getData from "../utils/getData"
import {getRandomDrink, getStringIng, getStringDrink, manyIngr} from "../index"




const Home = async () => {
    const ingredientList = await getData("list.php?i=list")
    const renderIngList = () => `<datalist id="ingredients">
    ${ingredientList.drinks.map(drink => `
        <option value="${drink.strIngredient1}">
    `).join("")}
</datalist>`
    const view = `
        <section class="Section-main">
            <h1>A New Way Of Making Cocktails</h1>
            <button id="random-drink">
                Get A Recipe Now</button>
            <div class="Filters-container">
                <p>Discover</p>
                <div class="Ingredients-filter">
                    <h6>By Ingredient</h6>
                    <label for="ingredient">Choose your ingredient from the list:</label>
                    <form id="ingrString">
                        <input list="ingredients" type="text" name="ingredient" id="ingredient">
                        ${renderIngList()}
                        <input type="submit" value="Submit">
                    </form>
                </div>
                <div class="Name-filter">
                    <h6>By Name</h6>
                    <form id="drinkString">
                        <input type="text" id="name" placeholder="Type A Drink Name Here">
                        <input type="submit" value="Submit">
                    </form>
                </div>
                <div class="Custom-filter">
                    <h6>Can I Make</h6>
                    <form id="manyIngr">
                        <input list="ingredients" type="text" id="user-input1" placeholder="Type Ingredient Here">
                        ${renderIngList()}
                        <input list="ingredients" type="text" id="user-input2" placeholder="Type Ingredient Here">
                        ${renderIngList()}
                        <input list="ingredients" type="text" id="user-input3" placeholder="Type Ingredient Here">
                        ${renderIngList()}
                        <input list="ingredients" type="text" id="user-input4" placeholder="Type Ingredient Here">
                        ${renderIngList()}
                        <input type="submit" value="Submit">
                    </form>
                </div>
            </div>
        </section>
    `
    return view
}

Home.OnComplete = () => {getRandomDrink(), getStringIng(), getStringDrink(), manyIngr()} 


export default Home