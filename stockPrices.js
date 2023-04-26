let prices = [2, 3, 10, 6, 4, 8, 1]

function best(prices) {
    let minPrice = prices[0]
    let maxProfit = 0
    for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
        minPrice = prices[i]
    } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice
    }
}
return maxProfit
}

console.log(best(prices))