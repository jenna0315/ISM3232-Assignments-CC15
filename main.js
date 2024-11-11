//Task 4: Implement main application and log portfolio details and transactions.
import { assetList, getAssetById } from './asset.js';
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

console.log('Asset List:', assetList);
console.log('Asset with ID 1:', getAssetById(1));

const portfolioValue = calculatePortfolioValue()
const applePortfolioAllocation = getPortfolioAllocation(1)
console.log(portfolioValue)
console.log(applePortfolioAllocation)


// Create a new Transaction
const Transaction1 = new Transaction(1);
Transaction.addItem(1, "buy", 3)
Transaction.addItem(2, "sell", 300); 

// Display Transaction details
console.log('Transaction:', Transaction1);
console.log(applePortfolioAllocation)