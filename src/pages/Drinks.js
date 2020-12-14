import getData from "../utils/getData"

const Drinks = async () => {
    const content = await getData()
    const view = `
        <div class="Drink-card">
            <a href="/">Home</a>
            ${content.drinks.map( drink => `
                <article class="Drink-main">
                    <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                    <h2>${drink.strDrink}</h2>
                </article>
                <article class="Drink-info">
                    <ul>
                        <h3>Ingredients:</h3>
                        <li><a></a></li>
                    </ul>
                    <p>Instruccions</p>
                </article>
            `)}
        </div>
    `
    return view
}

export default Drinks