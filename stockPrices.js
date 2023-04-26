let prices = [2, 3, 10, 6, 4, 8, 1]

function best(prices) {
    let minPrice = prices[0]
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
        minPrice = prices[i]
    } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice
    }
    console.log(`i = ${i}, i value = ${prices[i]}, minPrice = ${minPrice}, maxProfit = ${maxProfit}`)
}
return maxProfit
}

console.log(`maxProfit = ${best(prices)}`)


// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.



function lightChange(currlight) {
    if (currlight === "green") {
        return "yellow"
    } else if (
        currlight === "yellow") {
            return "red"
        } else { 
            return "green"
    }
}
    console.log(lightChange("green"))
    console.log(lightChange("yellow"))
    console.log(lightChange("red"))




