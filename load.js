$(document).ready(function(){
   $(".invisible").hide();
   $(document).on('click',"#bttn",function(){
      var morelessbutton=$(".invisible").is(":visible")?'Read More':'Read Less';
      $(this).text(morelessbutton);
      $(this).parent(".box").find(".invisible").toggle();
      $(this).parent(".box").find(".visible").toggle();
   });
});


// function toggleDropdown() {
//    var dropdown = document.querySelector('.dropdown');
//    dropdown.classList.toggle('active');
// }



let loadMoreBtn = document.querySelector ('.load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.container .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 3;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}

