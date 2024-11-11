import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// DOM Elements
const portfolioValueElement = document.getElementById('portfolio-value');
const portfolioAllocationTable = document.getElementById('portfolio-allocation').getElementsByTagName('tbody')[0];
const transactionLog = document.getElementById('transaction-log');

// Function to display the portfolio value
function displayPortfolioValue() {
  const totalValue = calculatePortfolioValue();
  portfolioValueElement.textContent = `Total Portfolio Value: $${totalValue.toFixed(2)}`;
}

// Function to display portfolio allocation
function displayPortfolioAllocation() {
  const allocation = getPortfolioAllocation();

  allocation.forEach((asset) => {
    id.textContent = asset.name;
    allocation.textContent = asset.allocation.toFixed(2);
  });
}

// Function to display transaction logs
function displayTransactionLog(message) {
  const listItem = document.createElement('li');
  listItem.textContent = message;
  transactionLog.appendChild(listItem);
}

// Simulate Transactions
function processTransactions() {
  try {
    const buyApple = new Transaction(1, 'buy', 5); // Buying 5 more Apple stocks
    buyApple.process();
    displayTransactionLog(`Bought 5 Apple Stock`);

    const sellTesla = new Transaction(2, 'sell', 3); // Selling 3 Tesla stocks
    sellTesla.process();
    displayTransactionLog(`Sold 3 Tesla Stock`);

  } catch (error) {
    displayTransactionLog(`Error: ${error.message}`);
  }

  // Update portfolio after transactions
  displayPortfolioValue();
  displayPortfolioAllocation();
}

// Initial Display
window.onload = () => {
  displayPortfolioValue();
  displayPortfolioAllocation();
  processTransactions(); // Process some transactions on page load
};
