$(function(){

  var imageIndex = 0;
  var $imageDisplayed;

  // const changeImage = () => {
  //   $imageDisplayed = $('img').eq(imageIndex);
  //   $imageDisplayed.removeClass('show');
  //   if(imageIndex < $('img').length - 1) {
  //     $imageDisplayed.next().addClass('show');
  //     imageIndex++;
  //   } else if (imageIndex === $('img').length - 1) {
  //     imageIndex = 0;
  //     $imageDisplayed = $('img').eq(imageIndex);
  //     $imageDisplayed.addClass('show');
  //   }
  // }

  const changeImage = () => {
    $imageDisplayed = $('.show');

    if($('img').index($imageDisplayed) <= 2) {
      $imageDisplayed.removeClass('show');
      $imageDisplayed.next().addClass('show');
    } else if ($('img').index($imageDisplayed) == 3) {
      $imageDisplayed.removeClass('show');
      $imageDisplayed = $('img').eq(1).addClass('show');
    }

  }

  var id = setInterval(changeImage, 3000);


  // const repeat = () => {
  //   for(var i = 0; i <= $('img').length; i++) {
  //     setTimeout(changeImage, 2000, i);
  //   }
  // }
  //
  // repeat();

  // setInterval(changeImage, 3000);

  // while(i <= $('img').length) {
  //   setTimeout(changeImage, 1000);
  // }

  // for(var i = 0; i <= $('img').length; i++) {
  //   setTimeout(changeImage, 5000);
  //   if(i === $('img').length) {
  //     i = 0;
  //   }
  // }

});
