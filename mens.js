
let img=document.querySelector("img");
let buttons=document.querySelectorAll("button");
let imgNum=0;
let imgArray=[
    "https://modesens.com/banner/11844/getimg/?img=%2Fbanner%2F20220516-modesens-SS22-SALE-1140x400-EN.jpg",
    "https://modesens.com/banner/12490/getimg/?img=%2Fbanner%2F20220616-modesens-SlamJam-1140x400-EN.jpg","https://modesens.com/banner/12457/getimg/?img=%2Fbanner%2F20220614-modesens-Monnalisa-1140x400-EN.jpg","https://modesens.com/banner/12463/getimg/?img=%2Fbanner%2F20220614-modesens-salesneakers-1140x400-M.jpg",
    "https://modesens.com/banner/12451/getimg/?img=%2Fbanner%2F20220613-modesens-MSaintLaurent-1140x400-M.jpg","https://modesens.com/banner/12462/getimg/?img=%2Fbanner%2F20220614-modesens-saledresses-1140x400-F.jpg","https://modesens.com/banner/12450/getimg/?img=%2Fbanner%2F20220613-modesens-FSaintLaurent-1140x400-F.jpg","https://modesens.com/banner/12387/getimg/?img=%2Fbanner%2F20220607-modesens-Beachvibes-1140x400-F.jpg"
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
    
})



