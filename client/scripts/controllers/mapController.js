angular.module('mvpApp.map', [])
  .controller('mapController',function (infoDisplay) {
    var markerUrl = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7CFE7569';
    var vm = this;
    vm.marks = [];
    var positions = [
      [37.318710, -122.153922],
      [36.270734, -121.546526],
      [41.385496, 2.180351],
      [35.362082, 138.729665],
      [47.498132, 19.038283],
      [53.351708, -6.255326],
      [19.077026, 72.881170],
      [24.326239, 54.664228]
    ];
    var posts = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum lorem eget nibh fringilla aliquet. Fusce metus lorem, dignissim nec varius a, dignissim ut libero. Morbi at aliquet velit. Donec viverra tortor eu elit laoreet, a malesuada leo tempus. Aenean lobortis laoreet nibh, in interdum odio fermentum eget. Phasellus ac pharetra dolor. Aliquam id augue viverra, tempor enim non, mollis diam. Pellentesque eleifend imperdiet laoreet. Vivamus ac maximus eros. Donec nec porttitor quam. Duis consectetur venenatis urna sit amet eleifend.',
      'Sed faucibus feugiat metus, ut faucibus lacus viverra sed. Vestibulum consequat porta suscipit. Nam magna ligula, tincidunt tincidunt pretium vel, pellentesque in libero. Quisque ac sapien hendrerit, tristique nisi ut, lobortis leo. Praesent posuere hendrerit nisi, et feugiat libero rutrum vitae. Phasellus finibus odio cursus eros aliquet, vel viverra massa vehicula. Quisque et egestas urna. Phasellus tempus risus at porttitor molestie. Quisque at faucibus velit. Quisque nec ultricies sem, et faucibus felis. Duis fermentum luctus ipsum vel imperdiet.',
      'Proin quam ligula, vestibulum sed ante placerat, interdum vehicula ligula. Integer id urna fringilla, faucibus augue et, mattis velit. Vivamus fringilla at ipsum eget bibendum. Integer a massa vel magna viverra efficitur. Quisque interdum ligula ac metus vulputate imperdiet. Quisque sapien neque, hendrerit quis porttitor nec, finibus tincidunt nisl. Etiam mollis, mauris quis ultrices lacinia, lacus nulla rhoncus diam, id dictum lectus arcu eu enim. Donec sodales ante nulla, eget hendrerit nibh dapibus ut. Fusce sagittis, mauris vitae tempus aliquet, ante sem sagittis mi, sed luctus nisi purus eu turpis. Quisque a vulputate lectus.',
      'Fusce vitae ligula id risus porta bibendum sed nec nisi. Integer felis metus, rutrum vel accumsan eget, rhoncus at sapien. Aenean dictum lectus a consequat pellentesque. Suspendisse lorem lorem, dignissim nec bibendum nec, hendrerit a dolor. Nulla quam dolor, rutrum vitae mattis id, tempus a arcu. Nulla facilisi. Praesent ut ornare nibh, id varius enim. Maecenas lobortis vel dolor id elementum. Fusce ipsum lacus, posuere egestas mi sit amet, scelerisque commodo leo. Maecenas eu libero aliquam, egestas nisl a, tincidunt erat. Vestibulum mollis aliquam nulla nec tincidunt.',
      'Sed ultricies consectetur augue ac bibendum. Etiam vitae quam id massa efficitur condimentum nec eu dui. Etiam nibh magna, scelerisque sit amet lectus et, suscipit vulputate ipsum. Nullam sed cursus est. Nullam at neque id enim facilisis facilisis vel sit amet diam. Donec sit amet accumsan sapien. Suspendisse egestas eros nibh, nec convallis magna viverra fringilla. Maecenas in odio in nibh viverra ultricies nec ac lacus. Vivamus eleifend lectus tellus, nec mollis sem ornare vitae. Integer purus felis, aliquam ac leo ut, faucibus porttitor neque. Curabitur varius laoreet turpis, in vestibulum lorem ullamcorper nec. Quisque efficitur, erat non gravida eleifend, dolor libero posuere massa, ac vulputate neque felis placerat lectus.',
      'Nulla viverra mattis metus, ac imperdiet dui tempus eu. Suspendisse potenti. Nullam porttitor ante at lectus accumsan, quis fringilla lacus sodales. Nunc vulputate libero felis, eget interdum velit dignissim sed. Maecenas sapien orci, sollicitudin sed lorem in, convallis fermentum diam. Curabitur vehicula rutrum arcu ut maximus. Nullam et neque ac velit vehicula tristique. Sed vulputate porta nibh quis condimentum. Sed ornare ipsum est, dapibus imperdiet nunc aliquet ac. Maecenas a fringilla lorem, non congue magna.',
      'Fusce fringilla leo in risus sollicitudin, fermentum venenatis lacus ultrices. Praesent lobortis erat a sapien bibendum, varius auctor felis blandit. Aliquam ac orci venenatis, lacinia diam eget, aliquet urna. Pellentesque diam justo, lobortis vel elit vitae, rutrum finibus urna. Donec lobortis est enim, quis lobortis dolor feugiat ac. Morbi facilisis, ante sit amet laoreet dictum, magna lectus fringilla turpis, tristique pretium magna mi vitae lorem. Quisque vulputate dolor magna, sagittis efficitur velit tempus et. Curabitur eget pharetra metus. Cras eu augue ac augue interdum porta. Nam a elementum erat.',
      'Cras nulla mauris, congue et nunc eu, laoreet egestas quam. Etiam blandit lorem in lobortis bibendum. Sed quis feugiat libero, vitae semper elit. Maecenas facilisis nibh augue. In nisi tellus, sodales eu felis eget, congue tristique orci. Morbi in nulla eget odio pellentesque tincidunt et at ex. Vivamus a cursus nisl. Maecenas sodales sapien quis posuere mollis.'
    ];
    var titles = [
      'Monte Bello', 
      'Ventana', 
      'Barcelona', 
      'Mt.Fuji', 
      'Budapest', 
      'Dublin', 
      'Mumbai', 
      'Abu Dhabi'
    ];
    var pictures = [
      3,
      0,
      2,
      2,
      2,
      1,
      0,
      3
    ]
    positions.forEach(function(item,index){
      vm.marks[index] = {
        id: index,
        position: item,
        post: {
          text: posts[index],
          title: titles[index]
        },
        pictures: pictures[index]
      }
    })
    var titlePlaceholder;
    var textPlaceholder;
    var infoWindowTemplate = [
      "<div>",
      "  <ul class=\"nav nav-tabs\" id=\"info-tabs\">",
      "    <li class=\"active\"><a class=\"tabber\" data-toggle=\"tab\" href=\"#post-tab\">Post<\/a><\/li>",
      "    <li><a class=\"tabber\" data-toggle=\"tab\" href=\"#image-tab\">Images<\/a><\/li>",
      "  <\/ul>",
      "  <h3 class=\"info-header\">",
      "<\/h3>",
      "  <div class=\"tab-content\">",
      "    <div class=\"tab-pane fade in active\" id=\"post-tab\">",
      "      <p>",
      "<\/p>",
      "    <\/div>",
      "    <div class=\"tab-pane fad\" id=\"image-tab\">",
      "    <\/div>",
      "  <\/div>",
      "<\/div>"
    ];
    angular.element(document).ready(function(){
      var canvas = document.getElementById('map');
      var options = {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 3
      }
      vm.map = new google.maps.Map(canvas, options);
      var infoWindow = new google.maps.InfoWindow({
        content: infoWindowTemplate.join(''),
        maxWidth: 400
      });
      for(var i = 0; i < vm.marks.length; i++){
        var info = infoWindowTemplate.slice();
        var point = vm.marks[i];
        info.splice(6, 0, point.post.title);
        info.splice(11, 0, point.post.text);
        for(var j = 1; j < point.pictures + 1; j++){
          var image = "<img class=\"in-tab\" src=\"images/" + point.post.title.replace(/\s/, "_") + "_" + j + ".jpg\">";
          info.splice(15, 0, image);
        }
        var markerIcon = {
          url: markerUrl,
          size: new google.maps.Size(8,8),
          scaledSize: new google.maps.Size(8,8)
        };
        point.marker = new google.maps.Marker({
          position: {
            lat: point.position[0],
            lng: point.position[1]
          },
          icon: markerIcon,
          map: vm.map,
          title: point.title
        })
        point.marker.html = info.join('');
        point.marker.addListener('click', function(){
          infoWindow.setContent(this.html);
          infoWindow.open(vm.map, this);
          $('.tabber').click(function(e){
            e.preventDefault();
          })
        })
        var that = point.marker;
        vm.map.addListener('zoom_changed', function(){
          var smallestSize = 5;
          var biggestSize = 36;
          var zoom = vm.map.getZoom();
          var relativeSize = Math.round(smallestSize*Math.pow(1.5,zoom));
          if(relativeSize > biggestSize){
            relativeSize = biggestSize;
          }
          for(var k = 0; k < vm.marks.length; k++){
            vm.marks[k].marker.setIcon({
              url: markerUrl,
              scaledSize: new google.maps.Size(relativeSize, relativeSize)
            })
            
          }
        })
      }
    })
     
  });
