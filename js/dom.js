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

