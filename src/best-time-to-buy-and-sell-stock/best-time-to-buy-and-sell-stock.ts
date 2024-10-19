export function maxProfit(prices: number[]): number {

    if (prices.length === 0) return 0;

    let minPrice = prices[0]; // Prezzo minimo iniziale
    let maxProfit = 0; // Profitto massimo iniziale

    // [7,1,5,3,6,4]

    for (let i = 1; i < prices.length; i++) {
        // Aggiorna il prezzo minimo se trovi un prezzo inferiore
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // Calcola il profitto se vendi oggi e confronta con il profitto massimo
            const profit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
}
