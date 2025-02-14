var finalPriceShipping = localStorage.getItem("value");
var productCodeShipping = localStorage.getItem("item_id");
var producNameShipping = localStorage.getItem("item_name");
var productPriceNumberShipping = localStorage.getItem("price");
var productQuantityShipping = localStorage.getItem("quantity");
var productCategoryShipping = localStorage.getItem("item_category");
var rutaImagen;

console.log(finalPriceShipping);
console.log(productCodeShipping);
console.log(producNameShipping);
console.log(productPriceNumberShipping);
console.log(productQuantityShipping);
console.log(productCategoryShipping);

const productName = document.querySelector("div[class*='contenedor-caracteristicas']").querySelector("div[class*='contenedorNombreProducto']").querySelector("span[class*='titulo-producto']");        
const productCode = document.querySelector("div[class*='contenedor-caracteristicas']").querySelector("div[class*='contenedorCodigoProducto']").querySelector("span[class^='codigo-producto']");
const productQuantity = document.querySelector("div[class*='contenedor-caracteristicas']").querySelector("div[class*='contenedorCantidad']").querySelector("span[class^='cantidad-producto']");
const productPrice = document.querySelector("div[class*='contenedor-caracteristicas']").querySelector("div[class*='contenedorPrecio']").querySelector("span[class*='precio-producto']");        
const productCategory = document.querySelector("div[class*='contenedor-caracteristicas']").querySelector("div[class*='contenedorCategoria']").querySelector("span[class^='categoria']");    
const finalPrice = document.querySelector("div[class*='contenedor-caracteristicas']").querySelector("div[class*='contenedorPrecioFinal']").querySelector("span[class^='precio-final']");        
const productImage = document.querySelector("div[class='contenedor-imagen-producto'] img");

if(productCodeShipping == "10006") {
    rutaImagen = "imagenes/products/Aceite 20w50 Super Moto 4t 20w-50 Bidón De 946 Ml Mobil.png";
} else if(productCodeShipping == "10027") {
    rutaImagen = "imagenes/products/Pack X12 Aceites Para Motor 4t Mx 15w-50 Mobil Super.webp";
}else if(productCodeShipping == "10053") {
    rutaImagen = "imagenes/products/Mobil Delvac Modern 15w-40 Def Ext 19l Ci-4plus Mobil 126146.png";
}else if(productCodeShipping == "10052") {
    rutaImagen = "imagenes/products/Mobil Delvac Legend 20w-50 Alto Kilometraje Mobil 127763.webp";
}else if(productCodeShipping == "10025") {
    rutaImagen = "imagenes/products/Pack X6 Anticongelante Mobil Coolant 33 Vida Extendida.webp";
}else if(productCodeShipping == "10062") {
    rutaImagen = "imagenes/products/Aceite Super Synthetic 5w-30 5 Litros Mobil.webp";
}else if(productCodeShipping == "10046") {
    rutaImagen = "imagenes/products/Aceite Super Trc-pro 20w-50 Api Sp Bidón De 5 Litros Mobil.webp";
}else if(productCodeShipping == "10059") {
    rutaImagen = "imagenes/products/Aceite Para Motor 5w-50 Sintético 1 Fs X2 946ml Mobil.webp";
}

productName.innerText = producNameShipping;
productCode.innerText = productCodeShipping;
productQuantity.innerText = productQuantityShipping;
productPrice.innerText = productPriceNumberShipping;
productCategory.innerText = productCategoryShipping;
finalPrice.innerText = finalPriceShipping;
productImage.setAttribute("src", rutaImagen);

window.addEventListener("load", () => {
    
    // alert("Ventana cargada");

    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
       
    dataLayer.push({
        event: "add_shipping_info",
        ecommerce: {
        currency: "USD",
        value: finalPriceShipping,
            items: [
                {
                item_id: productCodeShipping,
                item_name: producNameShipping,
                price: productPriceNumberShipping,
                quantity: productQuantityShipping,
                item_category: productCategoryShipping
                }
                    ]
                }
            });

});


const nextButton = document.getElementById("next");

nextButton.addEventListener("click", () => {

    localStorage.setItem("value", parseInt(finalPrice.innerText));
    localStorage.setItem("item_id", productCode.innerText);
    localStorage.setItem("item_name", productName.innerText);
    localStorage.setItem("price", parseInt(productPrice.innerText));
    localStorage.setItem("quantity", productQuantity.innerText);
    localStorage.setItem("item_category", productCategory.innerText);

})

const formButton = document.getElementById("boton-formulario");

formButton.addEventListener("click", () => {

    localStorage.setItem("value", parseInt(finalPrice.innerText));
    localStorage.setItem("item_id", productCode.innerText);
    localStorage.setItem("item_name", productName.innerText);
    localStorage.setItem("price", parseInt(productPrice.innerText));
    localStorage.setItem("quantity", productQuantity.innerText);
    localStorage.setItem("item_category", productCategory.innerText);

})

