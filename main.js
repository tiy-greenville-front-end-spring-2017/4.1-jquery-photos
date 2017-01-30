(function($){
  "use strict";

  $(function(){


    var heading = jQuery('.header h1');

    /* Hide the photo container */
    $('#album-photo-container').hide();

    var albumItems = $('.photo-container')
                      .find('a')
                      .not('.photo-tile');
                      //.children();

    albumItems.on('click', function(event){
      event.preventDefault();

      var $album = $(this),
      $photoContainer = $('#album-photo-container'),
      $albumContainer = $('#album-container'),
      albumTitle =  $album.find('h2').text();

      $albumContainer.hide();
      $photoContainer.show();

      $albumContainer.find('h2').text(albumTitle);

    });

  });

})(jQuery);
