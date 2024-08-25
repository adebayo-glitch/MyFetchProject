import {
    displayStockInformation, 
    displayStockWatchlistItem, 
    getWatchlistItemInformation, 
    removeWatchlist,
} from './dom'
import {
    addStockToWatchlist, 
    getStockInformation, 
    removeStockFromWatchlist,
    updateStockInformationNotes, 
    updateStockTargetPrice
} from './vintage-api'

const stockInformationSection = document.getElementById('stockInfo');
const searchButton = document.getElementById('searchBtn');
const watchlistSection = document.getElementById('watchlist');
const stockSymbolInput = document.getElementById('stockSymbol');

stockInformationSection.addEventListener('click', handleAddStockToWatchlist);

async function handleAddStockToWatchlist(event) {
    if (event.target.id === 'addToWatchlistBtn') {
        const symbol = document.querySelector('#stockInfo h2').textContent;
        try {
            const result = await addStockToWatchlist(symbol);
            if (result.success) {
                displayStockWatchlistItem(result.data.id, symbol);
                alert(`${symbol} added to watchlist`);
            } else {
                alert('Failed to add stock to watchlist');
            }
        } catch (error) {
            alert('Error adding stock to watchlist. Please try again.');
        }
    }
}

searchButton.addEventListener('click', handleStockSearch);

async function handleStockSearch() {
    const symbol = stockSymbolInput.value.trim().toUpperCase();
    if (!symbol) return;
    try {
        const stockInfo = await getStockInformation(symbol);
        displayStockInformation(stockInfo);
    } catch (error) {
        alert('Error fetching stock information. Please try again.');
    }
}


watchlistSection.addEventListener('click', handleStockWatchlistActions);
