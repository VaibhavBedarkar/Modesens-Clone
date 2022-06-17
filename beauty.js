let productArr=[

    {
        productimg:"https://cdn.modesens.com/product/6678065_76?w=400&",
        brandName:"Sisley paris",
        productName:"Black Roses Precious Face oil 25ml",
       productprice:"$150"
    },

    {
        productimg:"https://n.nordstrommedia.com/id/sr3/d2996d5b-6196-42db-b401-c7032c0b90a8.jpeg?w=780&h=838",
        brandName:"Sisley paris",
        productName:"Soapless Gentle Foaming Cleanser",
       productprice:"$72"
    },

    {
        
        productimg:"https://n.nordstrommedia.com/id/sr3/d4522742-c93b-483e-b2af-ff01f1704573.jpeg?w=780&h=838",
        brandName:"Sisley paris",
        productName:"Sisley-paris velvet Nourishing cream",
       productprice:"$165"
    }, 

    {
        productimg:"https://cdn.modesens.com/product/20950740_22?w=400&",
        brandName:"Sisley paris",
        productName:"Sisley paris Triple-oil Balm Make-up Remover",
       productprice:"$93"
    },
    {
        productimg:"https://n.nordstrommedia.com/id/sr3/d4522742-c93b-483e-b2af-ff01f1704573.jpeg?w=780&h=838",
        brandName:"Sisley paris",
        productName:"sisley Blush Brush, women in white",
       productprice:"$56"
    },
    {
        productimg:"https://cdn.modesens.com/product/20609416_27?w=400&",
        brandName:"Sisley paris",
        productName:"Soapless Gentle Foaming Cleanser",
       productprice:"$72"
    },
    {
        productimg:"https://www.net-a-porter.com/variants/images/665933304264224/in/w1000.jpg",
        brandName:"Sisley paris",
        productName:"Full flat lashes mascara",
       productprice:"$34"
    },

    {
        productimg:"https://cdn.modesens.com/product/6678166_58?w=400&",
        brandName:"Sisley paris",
        productName:"sisley Essential skin care Lotion",
       productprice:"$135"
    },
    {
        productimg:"https://cdn.modesens.com/product/6678166_58?w=400&",
        brandName:"Sisley paris",
        productName:"sisley Essential skin care Lotion",
       productprice:"$135"
    },
    {
        productimg:"https://cdn.modesens.com/product/6291076_15?w=400&",
        brandName:"Sisley paris",
        productName:"Instant Eclat Instant Glow primer",
       productprice:"$71",
    },
    {
        productimg:"https://cdn.modesens.com/product/6711226_43?w=400&",
        brandName:"SHISEIDO",
        productName:"Future solution Lx concentrated ",
       productprice:"$98"
    },
    {
        productimg:"https://n.nordstrommedia.com/id/sr3/ec9d7940-9983-47f6-98a5-8b32cf43628e.jpeg?w=780&h=838",
        brandName:"Sisley paris",
        productName:"sisley Essential skin care Lotion",
       productprice:"$120"
    },
    {
        productimg:"https://cdn.modesens.com/product/6288523_25?w=400&",
        brandName:"Sisley paris",
        productName:"sisley paris sisleya Lintegral Anti-age hand",
       productprice:"$63"
    },
    {
        productimg:"https://cdn.modesens.com/product/11102878_68?w=400&",
        brandName:"KIEHL'S SINCE 1851",
        productName:"sisley Essential Pore Daily cleanser",
       productprice:"$21"
    },
    {
        productimg:"https://cdn.modesens.com/product/6701621_48?w=400&",
        brandName:"BOBBI BROWN",
        productName:"Eye Shadow Brush in white",
       productprice:"$28"
    },
    {
        productimg:"https://cdn.modesens.com/product/6678065_76?w=400&",
        brandName:"Sisley paris",
        productName:"Black Roses Precious Face oil 25ml",
       productprice:"$150"
    },

    {
        productimg:"https://n.nordstrommedia.com/id/sr3/d2996d5b-6196-42db-b401-c7032c0b90a8.jpeg?w=780&h=838",
        brandName:"Sisley paris",
        productName:"Soapless Gentle Foaming Cleanser",
       productprice:"$72"
    },

    {
        
        productimg:"https://n.nordstrommedia.com/id/sr3/d4522742-c93b-483e-b2af-ff01f1704573.jpeg?w=780&h=838",
        brandName:"Sisley paris",
        productName:"Sisley-paris velvet Nourishing cream",
       productprice:"$165"
    }, 

    {
        productimg:"https://cdn.modesens.com/product/30085901_19?w=400&",
        brandName:"Sisley paris",
        productName:"sisley Blush Brush, women in white",
        productprice:"$72"
    },
    {
        productimg:"https://cdn.modesens.com/product/30407225_21?w=400&",
        brandName:"Sisley paris",
        productName:"sisley Blush Brush, women in white",
        productprice:"$56"
    },
]

productArr.forEach(function (el){
    let box=document.createElement("div");
   let productimg=document.createElement("img");
   let  brandName=document.createElement("h3");
    let productName=document.createElement("p");
    let productprice=document.createElement("p");
    let Texts=document.createElement("div");
    let Heart = document.createElement("i");
    Heart.setAttribute("class","far  fa-heart");
    
    brandName.innerText=el.brandName;
    productName.innerText=el.productName;
    productprice.innerText=el.productprice;
    productimg.setAttribute("src",el.productimg);
    var Btn = document.createElement("button");
    Btn.innerText="Add to cart";
    //If someone click on Add to cart button so Our particular item data will be Add on our localstorage that key name is cartData 
    Btn.addEventListener('click',function (){
        var cartArr=JSON.parse(localStorage.getItem("cartData"))||[];
        cartArr.push(el);
        localStorage.setItem("cartData",JSON.stringify(cartArr)); 
    })
    Texts.append(brandName,productName,productprice)
    box.append(Heart,productimg,Texts,Btn);
    document.querySelector("#container").append(box);
 

});



