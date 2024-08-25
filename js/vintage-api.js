const API_KEY = 'DYU0TIW5D76590CG';
const ALPHA_VANTAGE_URL = 'https://www.alphavantage.co/query';
const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com';




export async function getStockInformation(symbol) {
    try {
        const response = await axios.get(
            `${ALPHA_VANTAGE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
        );
        return response.data['Global Quote'];
    } catch (error) {
        console.error('Error fetching stock info:', error);
        throw error;
    }
}