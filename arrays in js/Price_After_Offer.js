let itemsPrice=[250, 645, 300, 900, 50];
let i=0;
// for(let price of itemsPrice){

//     let offer=price * 0.1;  //10% of Price= 10/100 * Price= 0.1 * Price
//     itemsPrice[i]= itemsPrice[i] - offer; //Price after offer= Price - 10% of Price= Price - offer
//     console.log(`price after 10% offer is=  ${itemsPrice[i]}`);
//     i++;
// }

for (let j=0; j<itemsPrice.length; j++){
    let offer=itemsPrice[j] * 0.1;  //10% of Price= 10/100 * Price= 0.1 * Price
    itemsPrice[j]= itemsPrice[j] - offer; //Price after offer= Price - 10% of Price= Price - offer
    console.log(`price after 10% offer is=  ${itemsPrice[j]}`); 
}