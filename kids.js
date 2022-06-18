
    let img=document.querySelector("img");
    let buttons=document.querySelectorAll("button");
    let imgNum=0;
    let imgArray=[
        "https://modesens.com/banner/12510/getimg/?img=%2Fbanner%2F20220616-modesens-Cettire-1140x400-EN.jpg",
        "https://modesens.com/banner/11845/getimg/?img=%2Fbanner%2F20220617-modesens-Sale-1140x400-EN.jpg",
        "https://modesens.com/banner/12024/getimg/?img=%2Fbanner%2F20220601kids-modesens-Sale-1140x400-K.jpg",
        "https://modesens.com/banner/12401/getimg/?img=%2Fbanner%2F20220608-modesens-Kids-1140x400-K.jpg",
    
        ]
    buttons[0].addEventListener("click",function(){
        if(imgNum===0){
            imgNum=imgArray.length-1;
        }else{
            imgNum--;
        }
        img.src=imgArray[imgNum];
    
    })
    buttons[1].addEventListener("click",function(){
        if(imgNum===imgArray.length-1){
            imgNum=0;
        }else{
            imgNum++;
        }
        img.src=imgArray[imgNum];
        
    });
    var offerArr=[    {
        productimg:"https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/7e5d76b3-afd1-4e82-8eee-179269cbab1c1604906586871-40-Banner-CharacterStore.jpg",
        brandName:"Dream Closet",
        productName:"T-shirt",
        productprice:"100"
    },
    {
        productimg:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/c75a2039-4199-4174-b1b9-fecd30f7d3f91604906586359-29-Essentials-Tshirts_Tops.jpg",
        brandName:"Classic Col",
        productName:"T-shirt & Tops",
        productprice:"150"
    },
    {
        productimg:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4e6eefd3-3355-4c1c-851e-48a49c97d5b31604906586407-30-Essentials-Onesies.jpg",
        brandName:"Zara",
        productName:"Night suits",
        productprice:"300"
    },
]
offerArr.forEach(function (el){
    let box=document.createElement("div");
   let productimg=document.createElement("img");
   let  brandName=document.createElement("h3");
    let productName=document.createElement("p");
    let productprice=document.createElement("p");
    let Texts=document.createElement("div");
    
    brandName.innerText=el.brandName;
    productName.innerText=el.productName;
    productprice.innerText=el.productprice;
    productimg.setAttribute("src",el.productimg);
    var Btn = document.createElement("button");
    Btn.setAttribute("id","offerBtn")
    Btn.innerText="Add to cart";
    //If someone click on Add to cart button so Our particular item data will be Add on our localstorage that key name is cartData 
    Btn.addEventListener('click',function (){
        var offerArr=JSON.parse(localStorage.getItem("cartData"))||[];
        offerArr.push(el);
        localStorage.setItem("cartData",JSON.stringify(offerArr)); 
    })
    Texts.append(brandName,productName,productprice,Btn)
    box.append(productimg,Texts);
    document.querySelector("#offer").append(box);


});
var trendingArr=[    {
        productimg:"https://cdn.modesens.com/product/21867878_29?w=400&",
        brandName:"BURBERRY",
        productName:"Kids Beige Vintage Check Headband",
        productprice:"100"
    },
    {
        productimg:"https://cdn.modesens.com/product/32216545_22?w=400&",
        brandName:"BURBERRY",
        productName:"Girls' Gina Vintage Check Leggings",
        productprice:"150"
    },
    {
        productimg:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/221376M718000_1.jpg",
        brandName:"BURBERRY",
        productName:"Kids Beige Jacket",
        productprice:"300"
    },
    {
        productimg:"https://cdn.modesens.com/product/18946677_34?w=400&",
        brandName:"BURBERRY",
        productName:"Girls Gina Sleeper ",
        productprice:"300"
    },
] 
trendingArr.forEach(function (el){
    let box=document.createElement("div");
   let productimg=document.createElement("img");
   let  brandName=document.createElement("h3");
    let productName=document.createElement("p");
    let productprice=document.createElement("p");
    let Texts=document.createElement("div");
    
    brandName.innerText=el.brandName;
    productName.innerText=el.productName;
    productprice.innerText=el.productprice;
    productimg.setAttribute("src",el.productimg);
    var Btn = document.createElement("button");
    Btn.setAttribute("id","offerBtn")
    Btn.innerText="Add to cart";
    //If someone click on Add to cart button so Our particular item data will be Add on our localstorage that key name is cartData 
    Btn.addEventListener('click',function (){
        var trendingArr=JSON.parse(localStorage.getItem("cartData"))||[];
        trendingArr.push(el);
        localStorage.setItem("cartData",JSON.stringify(trendingArr)); 
    })
    Texts.append(brandName,productName,productprice,Btn)
    box.append(productimg,Texts);
    document.querySelector("#Trending").append(box);

});



var recentlyArr=[    {
        productimg:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/221376M718000_1.jpg",
        brandName:"BURBERRY",
        productName:"Kids Beige Jacket",
        productprice:"100"
    },
    {
        productimg:"https://cdn.modesens.com/product/32216545_22?w=400&",
        brandName:"BURBERRY",
        productName:"Girls' Gina Vintage Check Leggings",
        productprice:"150"
    },
    {
        productimg:"https://cdn.modesens.com/product/21867878_29?w=400&",
        brandName:"BURBERRY",
        productName:"Kids Beige Vintage Check Headband",
        productprice:"300"
    },
    {
        productimg:"https://cdn.modesens.com/product/6678065_76?w=400&",
        brandName:"BURBERRY",
        productName:"Black Rose precious face oil",
        productprice:"300"
    },
]
recentlyArr.forEach(function (el){
    let box=document.createElement("div");
   let productimg=document.createElement("img");
   let  brandName=document.createElement("h3");
    let productName=document.createElement("p");
    let productprice=document.createElement("p");
    let Texts=document.createElement("div");
    
    brandName.innerText=el.brandName;
    productName.innerText=el.productName;
    productprice.innerText=el.productprice;
    productimg.setAttribute("src",el.productimg);
    var Btn = document.createElement("button");
    Btn.setAttribute("id","offerBtn")
    Btn.innerText="Add to cart";
    //If someone click on Add to cart button so Our particular item data will be Add on our localstorage that key name is cartData 
    Btn.addEventListener('click',function (){
        var recentlyArr=JSON.parse(localStorage.getItem("cartData"))||[];
        recentlyArr.push(el);
        localStorage.setItem("cartData",JSON.stringify(recentlyArr)); 
    })
    Texts.append(brandName,productName,productprice,Btn)
    box.append(productimg,Texts);
    document.querySelector("#recently").append(box);


});



