export function displayStockWatchlistItem(id, symbol, notes = '', targetPrice = '') {
    const watchlistItems = document.getElementById('watchlistItems');
    const listItem = document.createElement('li');
    listItem.className = 'watchlist-item';
    listItem.innerHTML = `
        <span>${symbol}</span>
        <input type="text" class="notes-input" placeholder="Add notes" value="${notes}">
        <input type="number" class="target-price-input" placeholder="Target price" value="${targetPrice}">
        <button class="update-btn" data-id="${id}">Update</button>
        <button class="remove-btn" data-id="${id}">Remove</button>
    `;
    watchlistItems.appendChild(listItem);
}


export function displayStockInformation(stockInfo) {
    const stockInfoElement = document.getElementById('stockInfo');
    stockInfoElement.innerHTML = `
        <h2>${stockInfo['01. symbol']}</h2>
        <p>Price: $${parseFloat(stockInfo['05. price']).toFixed(2)}</p>
        <p>Change: ${stockInfo['09. change']} </p>
        <p>Change Percentage: (${stockInfo['10. change percent']})</p>
        <button id="addToWatchlistBtn">Add to Watchlist</button>
    `;
}
