import getData from "../utils/getData"

const Home = async () => {
    let ingArgument = "list.php?i=list" 
    ingArgument.replace(/['"]+/g, '')
    const content = await getData(ingArgument)
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
                    <input list="ingredients" name="ingredient" id="ingredient">
                    <datalist id="ingredients">
                        ${content.drinks.map(drink => `
                            <option value="${drink.strIngredient1}">
                        `).join("") }
                    </datalist>
                </div>
                <div class="Name-filter">
                    <h6>By Name</h6>
                    <form>
                        <input type="text" id="name" placeholder="Type A Drink Name Here">
                        <input type="submit" value="Submit">
                    </form>
                </div>
                <div class="Custom-filter">
                    <h6>Can I Make</h6>
                    <form>
                        <input type="text" id="user-input1" placeholder="Type Ingredient Here">
                        <input type="text" id="user-input2" placeholder="Type Ingredient Here">
                        <input type="text" id="user-input3" placeholder="Type Ingredient Here">
                        <input type="text" id="user-input4" placeholder="Type Ingredient Here">
                        <input type="submit" value="Submit">
                    </form>
                </div>
            </div>
        </section>
    `
    return view
}

export default Home