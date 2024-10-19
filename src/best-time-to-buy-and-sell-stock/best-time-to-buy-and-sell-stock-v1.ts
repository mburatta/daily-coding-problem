export function maxProfit(prices: number[]): number {

    let maxEarning = 0;

    // [7,1,5,3,6,4]

    for (let i = 0; i < prices.length; i++) {

        for (let j = i + 1; j < prices.length; j++) {

            if (prices[i] < prices[j]) {
                const temporaryEarning = prices[j] - prices[i]
                if(temporaryEarning > maxEarning) {
                    maxEarning = temporaryEarning
                }

                console.log(`Prices: ${prices[i]} <-> ${prices[j]}`, `max earning ${maxEarning}`)
            }
        }
    }

    return maxEarning;
}
