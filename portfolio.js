//Task 2: Create portfolio module with calculatePortfolioValue and getPortfolioAllocation functions.
//Import assets
import { assetList, getAssetById } from './asset.js';

console.log('Asset List:', assetList);
console.log('Asset with ID 1:', getAssetById(1));

//Define and export a function calculatePortfolioValue()
export function calculatePortfolioValue() {
    return assetList.reduce((total, asset) => {
        return total + (asset.price * asset.quantity);
    }, 0);
};

//Export a function getPortfolioAllocation()
export function getPortfolioAllocation() {
    const totalPortfolioValue = calculatePortfolioValue();
    
    const allocation = assetList.map(asset => {
      const assetValue = asset.price * asset.quantity;
      const percentage = (assetValue/totalPortfolioValue) * 100;
      
      return {
        id: asset.id,
        name: asset.name,
        type: asset.type,
        quantity: asset.quantity,
        allocationPercentage: percentage.toFixed(2)
      };
    });
  
    return allocation;
  }