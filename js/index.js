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





searchButton.addEventListener('click', handleStockSearch);
watchlistSection.addEventListener('click', handleStockWatchlistActions);
