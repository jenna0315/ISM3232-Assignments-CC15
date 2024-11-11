import { assetList, getAssetById } from './asset.js';
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// DOM Elements
const portfolioValueElement = document.getElementById('portfolio-value');
const transactionLog = document.getElementById('transaction-log');

// Function to display the portfolio value
function displayPortfolioValue() {
  const totalValue = calculatePortfolioValue();
  portfolioValueElement.textContent = `Total Portfolio Value: $${totalValue.toFixed(2)}`;
}

const portfolioValue = calculatePortfolioValue()
const applePortfolioAllocation = getPortfolioAllocation(1)
const treasuryPortfolioAllocation = getPortfolioAllocation(2)

console.log(`Total Portfolio Value: ${portfolioValue}`)
console.log('Locate Asset By Id:')
console.log('Apple Inc. - ID 1:', getAssetById(1));
console.log('Portfolio Allocations')
console.log('Apple Inc. Portfolio Allocation:',applePortfolioAllocation)
console.log('Treasury Bonds Portfolio Allocation:', treasuryPortfolioAllocation)


// Function to display transaction logs
function displayTransactionLog(message) {
  const listItem = document.createElement('li');
  listItem.textContent = message;
  transactionLog.appendChild(listItem);
}

// Simulate Transactions
function processTransactions() {
  try {
    const buyApple = new Transaction(1, 'buy', 5); 
    buyApple.process();
    displayTransactionLog(`Purchased 5 Apple Inc. Stock`);

    const sellTreasuryBonds = new Transaction(2, 'sell', 3); 
    sellTreasuryBonds.process();
    displayTransactionLog(`Sold 3 US Treasury Bonds`);

  } catch (error) {
    displayTransactionLog(`Error: ${error.message}`);
  }

  // Update portfolio after transactions
  displayPortfolioValue();
}

// Initial Display
window.onload = () => {
  displayPortfolioValue();
  processTransactions(); // Process some transactions on page load
};
