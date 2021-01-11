import getHash from '../utils/getHash'

const API = 'https://www.thecocktaildb.com/api/json/v2/9973533/';

const getData = async (id, hash) => {
    hash = getHash()
    const apiURL = id ? `${API}${id}` : `${API}${hash}`;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error){
        console.log('Fetch Error', error);
    };
};

export default getData