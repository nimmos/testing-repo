let element = document.getElementById('test');
let sub = document.createElement('button');
sub.appendChild(document.createTextNode('Subscribe'));
sub.onclick = function () { console.log('You subscribed!') };
element.appendChild(sub);

$(document).ready( function() {

	$('#test button').html('Subscribe to Git');

	$('#test button').css('color', 'blue');
	$('#test button').css('background-color', 'transparent');
	$('#test button').css('border', 'solid 1px grey');
	$('#test button').css('border-radius', '5px');
	$('#test button').css('cursor', 'pointer');
	$('#test button').hover( function () {
		$(this).css('background-color', 'silver');
	}, function () {
		$(this).css('background-color', 'transparent');
	});

});