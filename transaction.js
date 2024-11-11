//Task 3: Create transaction module with Transaction class.
import { assetList, getAssetById } from './asset.js';

console.log('Asset List:', assetList);
console.log('Asset with ID 1:', getAssetById(1));

// Create Transaction class
class Transaction {
    constructor(assetId,type,quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity
    }
    execute() {
        const asset = getAssetById(this.assetId);
        if (this.type === 'buy') {
            asset.quantity += this.quantity;
            console.log(`Bought ${this.quantity} units of ${asset.name}. New quantity: ${asset.quantity}`);
        };
        if (this.type === 'sell') {
            if (asset.quantity < this.quantity) {
                throw new Error(`Not enough of ${asset.name} ${asset.type}'s for sale.`);
              }
            }
            else {
                // Decrease the quantity of the asset
                asset.quantity -= this.quantity;
                console.log(`Sold ${this.quantity} units of ${asset.name}. New quantity: ${asset.quantity}`);
      }}
    }
    export { Transaction };