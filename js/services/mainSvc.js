angular.module('app')
  .service('mainSvc', function($http) {

    this.getJoke = function() {
      return $http({
        method: 'GET',
        url: 'http://api.icndb.com/jokes/random',

      }).then(function(response) {
        console.log(response);
        return response.data.value.joke;
      });
    };

    this.getKitten = function() {
      var rando = Math.floor(Math.random() * 5);
      console.log(rando);
      return kittenArr[rando];
    };

    });



kittenArr = [
  'https://s-media-cache-ak0.pinimg.com/736x/20/41/3f/20413f9867dbcb62d7db8ed53082de45.jpg',
  'https://s-media-cache-ak0.pinimg.com/236x/3a/3d/24/3a3d24d5e372c9cab997170a021d5c32.jpg',
  'https://s-media-cache-ak0.pinimg.com/564x/da/29/e7/da29e76b9e067568e452b6c225197019.jpg',
  'http://www.warrenphotographic.co.uk/photography/bigs/35564-Cute-tabby-kitten-6-weeks-old-white-background.jpg',
  'http://www.warrenphotographic.co.uk/photography/bigs/01177-Colourpoint-Siamese-kitten-looking-up-white-background.jpg'
];
