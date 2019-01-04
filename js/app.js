let element = document.getElementById('test');
let sub = document.createElement('button');
sub.appendChild(document.createTextNode('Subscribe'));
sub.onclick = function () { console.log('You subscribed!') };
element.appendChild(sub);

let ages = [28, 14, 15, 22, 15, 28, 14, 14, 16, 23, 18, 20, 17];
console.log(ages);

let minors = _.filter(ages, function(item) {
	return item < 18;
});
console.log(minors);

let minor_ages = _.uniq(minors);
console.log(minor_ages);

let dobs = _.map(ages, function(item){
	return 2019 - item;
});
console.log(dobs);

let years_of_minors = _(ages)
	.filter(function(item) {
		return item < 18;
	})
	.uniq()
	.map(function(item){
		return 2019 - item;
	})
	.value();
years_of_minors.sort( function (a,b) { return a - b; });
console.log(years_of_minors);