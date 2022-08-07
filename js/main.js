document.querySelector("ul li:nth-child(4)").onclick=function(){
    if(document.querySelector("ul.hidden").style.display==="flex"){
        document.querySelector("ul.hidden").style.display="none"
    }else{
        document.querySelector("ul.hidden").style.display="flex"
    }
}

document.querySelector("ul.hidden").onmouseleave=function(){
document.querySelector("ul.hidden").style.display="none"
    
}

document.querySelector(".header .container > i").onclick=function(){
    if(document.querySelector(".header .container .links").style.display==="block"){
        document.querySelector(".header .container .links").style.display="none"
    }else{
        document.querySelector(".header .container .links").style.display="block"
    }
}


window.onresize=function(){
    let currSize=document.querySelector(" .landing .img img").clientHeight;
document.querySelector(".landing .img").style.height=`${currSize -100}px`};
window.onload=function(){
    let currSize=document.querySelector(" .landing .img img").clientHeight;
document.querySelector(".landing .img").style.height=`${currSize -100}px`};
window.onscroll=function(){
if(window.scrollY >73){
    document.querySelector(".header").style.cssText='position: fixed; width: 100%; background-color:white;min-height:70px;box-shadow: 0px 0px 10px rgba(0,0,0,0.15);'
}else{
    document.querySelector(".header").style.position="relative"
    document.querySelector(".header").style.width="unset"
    const mediaQuery = window.matchMedia('(max-width: 991px)');
    if (mediaQuery.matches) {
        document.querySelector(".header").style.backgroundColor="#f7f7f7"

      }else{
        document.querySelector(".header").style.backgroundColor="unset"

      }
      
    document.querySelector(".header").style.minHeight="unset"
    document.querySelector(".header").style.boxShadow="unset"
}
}