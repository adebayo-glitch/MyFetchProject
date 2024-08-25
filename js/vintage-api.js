import { getNextId } from "./utils.js";

const API_KEY = 'DYU0TIW5D76590CG';
const URL = 'https://www.alphavantage.co/query';
const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com';


export async function addStockToWatchlist(symbol) {
    try {
        const id = getNextId();
        const response = await axios.post(`${JSON_PLACEHOLDER_URL}/posts`, {
            id: id,
            title: symbol,
            body: 'Added to watchlist',
            userId: 1
        });
        return { success: true, data: { ...response.data, id: id } };
    } catch (error) {
        console.error('Error adding stock to watchlist:', error);g
    }
}

export async function updateStockInfo(id, symbol, notes, targetPrice) {
    if (!id) {
        throw new Error('Invalid ID');
    }
    try {
        const response = await axios.put(`${JSON_PLACEHOLDER_URL}/posts/${id}`, {
            id: id,
            title: symbol,
            body: `Notes: ${notes}\nTarget Price: ${targetPrice}`,
            userId: 1
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Error updating stock information:', error);
    }
}


export async function getStockInformation(symbol) {
    try {
        const response = await axios.get(
            `${URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
        );
        return response.data['Global Quote'];
    } catch (error) {
        console.error('Error fetching stock info:', error);
   
    }
}

export async function removeStockFromWatchlist(symbol) {
    //  request to remove a stock from the watchlist using promise
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true, message: `${symbol} removed from watchlist` });
        }, 500);
    });
}