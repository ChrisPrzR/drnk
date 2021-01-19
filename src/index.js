import router from './routes/index';
import "./styles/styles.scss"

window.addEventListener("load", router)
window.addEventListener("hashchange", router)



const getRandomDrink = () => {
    const randomDrinkBtn = document.getElementById("random-drink")
    randomDrinkBtn.addEventListener('click', ()=>{
        location.hash = "/random.php"
    })
}

const getStringIng = () => {
    const form = document.getElementById("ingrString")
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const string = document.getElementById("ingredient").value
        location.hash = "/filter.php?i=" + string
    })
}

const getStringDrink = () => {
    const form = document.getElementById("drinkString")
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const string = document.getElementById("name").value
        location.hash = "/search.php?s=" + string
    })
}

const manyIngr = () => {
    const form = document.getElementById("manyIngr")
    form.addEventListener('submit', async(e) => {
        e.preventDefault()
        const string1 = document.getElementById("user-input1").value ? document.getElementById("user-input1").value : ''
        const string2 = document.getElementById("user-input2").value ? ',' + document.getElementById("user-input2").value : ''
        const string3 = document.getElementById("user-input3").value ? ',' + document.getElementById("user-input3").value : ''
        const string4 = document.getElementById("user-input4").value ? ',' + document.getElementById("user-input4").value : ''

        location.hash = "/filter.php?i=" + string1 + string2 + string3 + string4
    })
}
export {getRandomDrink, getStringIng, getStringDrink, manyIngr} 

