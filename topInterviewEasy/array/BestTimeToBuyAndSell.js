if(prices.length <= 1) return 0;
    let profit = 0;
    let i = 0;
    while(i < prices.length - 1){
        if(prices[i] < prices[i+1]){
            profit += (prices[i+1] - prices[i]);
        }
        i++;
    }
return profit;
