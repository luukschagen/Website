$(function() {  
  $('.image').on('click', (event) => {
    $('body').toggleClass('opacity');
    let $selectedImage = $(event.currentTarget).clone();
    $selectedImage.appendTo('body').toggleClass('selected').on('click', (event) =>{
      $selectedImage.remove();
      $('body').toggleClass('opacity');
    });
  })
});