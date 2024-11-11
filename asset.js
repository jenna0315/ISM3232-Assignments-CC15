//Task 1: Create asset module with asset list and getAssetById function.
//creation of asset module
export const assetList = [
    { id: 1, name: 'Apple Inc.', type: 'stock', price: 1200.00, quantity: 40 },
    { id: 2, name: 'US Treasury Bond', type: 'bond', price: 150.00, quantity:100},
    { id: 3, name: 'Amazon Inc.', type: 'stock', price: 200.00, quantity:10}
];

//create getAssetById function
export function getAssetById(id) {
    return assetList.find(asset => asset.id === id);
}