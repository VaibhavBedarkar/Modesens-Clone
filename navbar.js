// js for first slide 

    let img = document .querySelector("img");
let buttons = document.querySelectorAll("button");
let imgNum = 0;

let imgArr=[
"https://modesens.com/banner/12474/getimg/?img=%2Fbanner%2F20220615-modesens-SSENSE-1140x400-EN.jpg",
"https://modesens.com/banner/12480/getimg/?img=%2Fbanner%2F20220615-modesens-Vestiaire-1140x400-EN.jpg",
"https://modesens.com/banner/12480/getimg/?img=%2Fbanner%2F20220615-modesens-Vestiaire-1140x400-EN.jpg",
"https://modesens.com/banner/12481/getimg/?img=%2Fbanner%2F20220615-modesens-Renaisa-1140x400-US-EN.jpg",
"https://modesens.com/banner/12456/getimg/?img=%2Fbanner%2F20220614-modesens-Monnalisa-1140x400-EN.jpg",
"https://modesens.com/banner/12448/getimg/?img=%2Fbanner%2F20220613-modesens-AERYNE-1140x400-EN.jpg",
"https://modesens.com/banner/12467/getimg/?img=%2Fbanner%2F20220614-modesens-lengjingblog-1140x400.jpg",
"https://modesens.com/banner/12467/getimg/?img=%2Fbanner%2F20220614-modesens-lengjingblog-1140x400.jpg",
"https://modesens.com/banner/12450/getimg/?img=%2Fbanner%2F20220613-modesens-FSaintLaurent-1140x400-F.jpg"

];

// for first button

buttons[0].addEventListener("click",function(){
    if(imgNum==0){
        imgNum=imgArr.length-1
    }
    else{
        imgNum--
    }
    img.src = imgArr[imgNum]
})


buttons[1].addEventListener("click",function(){
    if(imgNum==imgArr.length-1){
        imgNum=0
    }
    else{
        imgNum++
    }
    img.src = imgArr[imgNum]
})


// end of first slide 


// start of second slide

let left = 1 ;
let right = 5 ;

function show(){
    
    for(let i=left ; i<=right ;i++){
        document.getElementById("c"+i).style.display="inline-block";
        
    }
}

function moveleft(){
if(left<=3 && right <=7)
{


document.getElementById("c"+left).style.display="none"
left+=1;
right+=1;

for(let i=left ; i<=right ;i++){
        document.getElementById("c"+i).style.display="inline-block";
    }

}
else 
    return ;
 

}

function moveright(){
   
if(left>= 2 && right >=6)
{


document.getElementById("c"+right).style.display="none"
left-=1;
right-=1;

for(let i=left ; i<=right ;i++){
        document.getElementById("c"+i).style.display="inline-block";
    }

}
else 
    return ;
 

}
// end of second slide 

var splide = new Splide( '.sp2', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
  } );
  
  splide.mount();
    
    

  var splide = new Splide( '.sp3', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
  } );
  
  splide.mount();
    
    

