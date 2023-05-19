const carousel =document.querySelector(".carousel");

let isDragStart =false;

const dragStart=(e)=>{
    isDragStart=true;
    prevPageX=e.pageX;
    prevScrollLeft=carousel.scrollLeft;
}
const dragging= (e) =>
{
    if(! isDragStart) return;
    e.preventDefault();
    carousel.scrollLeft = e.pageX -prevPageX;
    carousel.scrollLeft=prevScrollLeft-positionDiff;


}

const draggStop =() =>
{
    isDragStart=false;
}
carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("mouseup",draggStop);