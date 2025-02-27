import {
    displayStockInformation, 
    displayStockWatchlistItem, 
    getWatchlistItemInformation, 
    removeWatchlist,
} from './dom.js'
import {
    addStockToWatchlist, 
    getStockInformation, 
    removeStockFromWatchlist,
    updateStockInfo,
} from './vintage-api.js'

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

async function handleStockWatchlistActions(event) {
    const id = parseInt(event.target.dataset.id);
    if (!id) return;
    if (event.target.classList.contains('update-btn')) {
        const { symbol, notes, targetPrice } = getWatchlistItemInformation(id);
        try {
            await updateStockInfo(id, symbol, notes, targetPrice);
            alert(`${symbol} stock Updated Successfully`);
        } catch (error) {
            alert('Error updating stock information. Please try again.');
        }
    } else if (event.target.classList.contains('remove-btn')) {
        try {
            await removeStockFromWatchlist(id);
            removeWatchlist(id);
            alert(`Stock removed from watchlist`);
        } catch (error) {
            alert('Error removing stock from watchlist. Please try again.');
        }
    }
}
