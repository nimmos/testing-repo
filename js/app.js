let element = document.getElementById('test');
let sub = document.createElement('button');
sub.appendChild(document.createTextNode('Subscribe'));
sub.onclick = function () { console.log('You subscribed!') };
element.appendChild(sub);