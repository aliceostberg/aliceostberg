

function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html(''); 
	
	var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}

$( document ).ready(function() {
  var speed = 100;
  var delay = $('h2').text().length * speed + speed;
  typeEffect($('h2'), speed);
  

  setTimeout(function(){
    $('h3').css('display', 'inline-block');
    typeEffect($('h3'), speed);
  }, delay);
});

