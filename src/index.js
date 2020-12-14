import router from './routes/index';

window.addEventListener("load", router)
window.addEventListener("hashchange", router)

const getRandomDrink = () => {
    const randomDrinkBtn = document.getElementById("random-drink")
    randomDrinkBtn.addEventListener("click", ()=>{
        location.hash = "/random.php"
    })
}

setTimeout(() => {getRandomDrink()}, 1000)

    //add event listener


// i need for the button to change the hash and render a random drink

//need get data to include the hash for the query

// if id in get data contains a hash id == await gethash() else run normally