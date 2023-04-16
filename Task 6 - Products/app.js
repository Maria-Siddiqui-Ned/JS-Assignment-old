var products = ['rings', 'bangles', 'ear rings', 'necklace', 'tops'];
var delProduct = +prompt ('Enter the position of product you want to remove. Our available products are: rings, bangles, ear rings, necklace, tops');


if (delProduct<= 4)
    {
    console.log(products[delProduct]);
    products.splice(delProduct, 1 );
    document.write ("Now remaining available products are: " + products);
    document.write("<br><br>");
    document.write ("Total number of items remaining are: " + products.length);
    }

else{
    alert('You entered invalid position. Please try again!!')
    }