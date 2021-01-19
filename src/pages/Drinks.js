import getData from "../utils/getData"
import Error404 from "../pages/Error404"


const Drinks = async () => {
    const content = await getData()
    let view 
    if(content != null && Array.isArray(content.drinks)){
        const drinkURL =  content.drinks.map( item => "lookup.php?i=" + item.idDrink)
        const getInfo = async() => {
        return Promise.all(drinkURL.map(item => getData(item)))  
        }
        view = `
        <a class="back-btn" href="/">Home</a>
        ${await getInfo()
            .then(ele => ele.map(item => item.drinks.map( drink => `
            <div class="Drink-card">
            <article class="Drink-main">
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                <h2>${drink.strDrink}</h2>
            </article>
            <article class="Drink-info">
                <ul>
                    <h3>Ingredients:</h3>
                    ${drink.strIngredient1 ? `<li>${drink.strIngredient1}: <span>${drink.strMeasure1 ? drink.strMeasure1 : ''}</span></li>` : ''}
                    ${drink.strIngredient2 ? `<li>${drink.strIngredient2}: <span>${drink.strMeasure2 ? drink.strMeasure2 : ''}</span></li>` : ''}
                    ${drink.strIngredient3 ? `<li>${drink.strIngredient3}: <span>${drink.strMeasure3 ? drink.strMeasure3 : ''}</span></li>` : ''}
                    ${drink.strIngredient4 ? `<li>${drink.strIngredient4}: <span>${drink.strMeasure4 ? drink.strMeasure4 : ''}</span></li>` : ''}
                    ${drink.strIngredient5 ? `<li>${drink.strIngredient5}: <span>${drink.strMeasure5 ? drink.strMeasure5 : ''}</span></li>` : ''}
                    ${drink.strIngredient6 ? `<li>${drink.strIngredient6}: <span>${drink.strMeasure6 ? drink.strMeasure6 : ''}</span></li>` : ''}
                    ${drink.strIngredient7 ? `<li>${drink.strIngredient7}: <span>${drink.strMeasure7 ? drink.strMeasure7 : ''}</span></li>` : ''}
                    ${drink.strIngredient8 ? `<li>${drink.strIngredient8}: <span>${drink.strMeasure8 ? drink.strMeasure8 : ''}</span></li>` : ''}
                </ul>
                <div class="instructions-container">
                    <p>${drink.strInstructions}</p>
                </div>
            </article>
            </div>
        `)).join(""))}     
    `}
    else{
        view = Error404()
        }
        return view
}

export default Drinks
