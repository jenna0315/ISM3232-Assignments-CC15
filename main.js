//Task 4: Implement main application and log portfolio details and transactions.
import { assetList, getAssetById } from './asset.js';
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

console.log('Asset List:', assetList);
console.log('Asset with ID 1:', getAssetById(1));

const portfolioValue = calculatePortfolioValue()
const applePortfolioAllocation = getPortfolioAllocation(1)
console.log(`Total Portfolio Value: ${portfolioValue}`)
console.log(applePortfolioAllocation)


// Create a new Transaction
const Transaction1 = new Transaction(1, "buy", 3)
const Transaction2 = new Transaction(2, "sell", 300); 

// Display Transaction details
console.log('Transaction 1:', Transaction1);
console.log('Transaction 2:', Transaction2);
console.log(applePortfolioAllocation)