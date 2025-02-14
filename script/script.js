var contador;

const menu_option_1 = document.getElementById("menu-option-1");

menu_option_1.addEventListener("click", () => {

    dataLayer.push({
        event: 'menu_option_click',
        menu_option: menu_option_1.innerText
    })

});

const menu_option_2 = document.getElementById("menu-option-2");

menu_option_2.addEventListener("click", () => {

    dataLayer.push({
        event: 'menu_option_click',
        menu_option: menu_option_2.innerText
    })

});

const menu_option_3 = document.getElementById("menu-option-3");

menu_option_3.addEventListener("click", () => {

    dataLayer.push({
        event: 'menu_option_click',
        menu_option: menu_option_3.innerText
    })

});

const menu_option_4 = document.getElementById("menu-option-4");

menu_option_4.addEventListener("click", () => {

    dataLayer.push({
        event: 'menu_option_click',
        menu_option: menu_option_4.innerText
    })

});

const botones = document.querySelectorAll("div[class='contenedor-botones'] button[class^=button]");

var longitudArregglo = botones.length;

// alert(longitudArregglo);

const banner_confirmacion = document.getElementById("banner-confirmacion");

const boton_cierre = document.getElementById("boton-cierre");

const seccion_uno = document.querySelector("section[class='seccion_uno']");

boton_cierre.addEventListener('click', () => {

banner_confirmacion.setAttribute("class", "banner-confirmacion hidden");

    for(let i = 0; i < longitudArregglo; i++) {
        let boton = botones[i];
        boton.removeAttribute("disabled");
    }

});

const imagenBanner = document.querySelector("div[class='contenedor-cuerpo-banner']").querySelector("div[class='contenedor-imagen-confirmacion']").querySelector("img[class='imagen-confirmacion']");

const textoBanner = document.querySelector("div[class='contenedor-cuerpo-banner']").querySelector("div[class='contenedor-titulo-banner-confirmacion']").querySelector("span[class='titulo-banner-confirmacion']");

    for(let i = 0; i < longitudArregglo; i++) {
        let boton = botones[i];
        let idBoton = boton.getAttribute("id");
        
        boton.addEventListener("click", (e) => {
            
            if(idBoton === e.target.id) {

                // alert(idBoton);

                let textoBoton = boton.innerText;

                var productName = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedor-caracteristicas']").querySelector("div[class*='contenedorNombreProducto']").querySelector("span[class*='titulo-producto']").innerText;        
                var productCode = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedorCodigoProducto']").querySelector("span[class^='codigo-producto']").innerText;
                var productQuantity = parseInt(boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedorCantidad']").querySelector("span[class^='cantidad-producto']").innerText);
                var productPrice = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedor-caracteristicas']").querySelector("div[class*='contenedorPrecio']").querySelector("span[class*='precio-producto']").innerText;        
                var productCategory = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedorCategoria']").querySelector("span[class^='categoria']").innerText;        
                var productPriceNumber = parseInt(productPrice);
                var finalPrice = parseInt(boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedor-caracteristicas']").querySelector("div[class*='contenedorPrecioFinal']").querySelector("span[class^='precio-final']").innerText);        

                    if(textoBoton === "+") {

                        contador = productQuantity + 1;

                        var etiquetaCantidad = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class='contenedorCantidad']").querySelector("span[class*='cantidad-producto']");

                        var etiquetaPrecioFinal = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class='contenedorPrecioFinal']").querySelector("span[class^='precio-final']");

                        etiquetaCantidad.innerText = contador;

                        finalPrice = contador * productPriceNumber;  

                        etiquetaPrecioFinal.innerText = finalPrice;

                    } 
                    
                    if (textoBoton === "-") {

                        contador = productQuantity - 1;

                        var etiquetaCantidad = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class='contenedorCantidad']").querySelector("span[class*='cantidad-producto']");

                        var etiquetaPrecioFinal = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class='contenedorPrecioFinal']").querySelector("span[class^='precio-final']");

                        if(contador < 1) {

                            contador = 1;

                        }

                        etiquetaCantidad.innerText = contador;

                        finalPrice = contador * productPriceNumber;

                        etiquetaPrecioFinal.innerText = finalPrice;
                        
                    }

                    productName = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedor-caracteristicas']").querySelector("div[class*='contenedorNombreProducto']").querySelector("span[class*='titulo-producto']").innerText;        
                    productCode = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedorCodigoProducto']").querySelector("span[class^='codigo-producto']").innerText;
                    productQuantity = parseInt(boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedorCantidad']").querySelector("span[class^='cantidad-producto']").innerText);
                    productPrice = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedor-caracteristicas']").querySelector("div[class*='contenedorPrecio']").querySelector("span[class*='precio-producto']").innerText;        
                    productCategory = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedorCategoria']").querySelector("span[class^='categoria']").innerText;    
                    productPriceNumber = parseInt(productPrice);
                    finalPrice = parseInt(boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedor-caracteristicas']").querySelector("div[class*='contenedorPrecioFinal']").querySelector("span[class^='precio-final']").innerText);        

                    // alert(productName);

                    // alert(productCategory);

                    // alert(productPriceNumber);
    
                    // alert(productCode);
    
                    // alert(productQuantity);

                    // alert(finalPrice);

                if(idBoton == "button-1") {

                dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.

                dataLayer.push({
                    event: "add_to_cart",
                    ecommerce: {
                    currency: "USD",
                    value: finalPrice,
                        items: [
                            {
                            item_id: productCode,
                            item_name: productName,
                            price: productPriceNumber,
                            quantity: productQuantity,
                            item_category: productCategory
                            }
                                ]
                            }
                        });

                        for(let i = 0; i < longitudArregglo; i++) {
                            boton = botones[i];
                            boton.setAttribute("disabled",true)
                        }

                        imagenBanner.setAttribute("src", "imagenes/Iconos/Icono producto agregado.png")

                        textoBanner.innerText = "Product added to cart";
                        
                        banner_confirmacion.setAttribute("class", "banner-confirmacion visible");

                } else if (idBoton == "button-2") {

                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    
                    dataLayer.push({
                        event: "remove_from_cart",
                        ecommerce: {
                        currency: "USD",
                        value: finalPrice,
                            items: [
                                {
                                item_id: productCode,
                                item_name: productName,
                                price: productPriceNumber,
                                quantity: productQuantity,
                                item_category: productCategory
                                }
                                    ]
                                }
                            });

                            for(let i = 0; i < longitudArregglo; i++) {
                                boton = botones[i];
                                boton.setAttribute("disabled",true)
                            }
    
                            imagenBanner.setAttribute("src", "imagenes/Iconos/Icono producto removido.png")
    
                            textoBanner.innerText = "Product removed from cart";
                            
                            banner_confirmacion.setAttribute("class", "banner-confirmacion visible");
    
                    } else if (idBoton == "button-3") {

                       dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
       
                       dataLayer.push({
                           event: "begin_checkout",
                           ecommerce: {
                           currency: "USD",
                           value: finalPrice,
                               items: [
                                   {
                                   item_id: productCode,
                                   item_name: productName,
                                   price: productPriceNumber,
                                   quantity: productQuantity,
                                   item_category: productCategory
                                   }
                                       ]
                                   }
                               });

                               localStorage.setItem("value", finalPrice);
                               localStorage.setItem("item_id", productCode);
                               localStorage.setItem("item_name", productName);
                               localStorage.setItem("price", productPriceNumber);
                               localStorage.setItem("quantity", productQuantity);
                               localStorage.setItem("item_category", productCategory);
       
                       } else if (idBoton == "button-4") {

                        function generacionAleatorio() {
                           var fecha = new Date();
                           var dia = fecha.getDate();
                           var diaTexto = "" + dia;
                           var mes = fecha.getMonth() + 1;
                           var mesTexto = "" + mes;
                           var anio = fecha.getFullYear();
                           var anioTexto = "" + anio;
                           var seg = fecha.getSeconds();
                           var segTexto = "" + seg;
                           var min = fecha.getMinutes();
                           var minTexto = "" + min;
                           var hor = fecha.getHours();
                           var horTexto = "" + hor;
                           var fechaTexto = diaTexto.concat(mesTexto,anioTexto,horTexto,minTexto,segTexto);
                           return (parseInt(Math.random()*10000)) + fechaTexto;
                       }

                       const transactionId = generacionAleatorio();

                       dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
       
                       dataLayer.push({
                           event: "purchase",
                           ecommerce: {
                           transaction_id: transactionId,
                           currency: "USD",
                           value: finalPrice,
                               items: [
                                   {
                                   item_id: productCode,
                                   item_name: productName,
                                   price: productPriceNumber,
                                   quantity: productQuantity,
                                   item_category: productCategory
                                   }
                                       ]
                                   }
                               });
   
                               for(let i = 0; i < longitudArregglo; i++) {
                                   boton = botones[i];
                                   boton.setAttribute("disabled",true)
                               }
       
                               imagenBanner.setAttribute("src", "imagenes/Iconos/Icono transacción exitosa.png")
       
                               textoBanner.innerText = "Successful purchase";
                               
                               banner_confirmacion.setAttribute("class", "banner-confirmacion visible");
       
                       }


            }
        })

    }

