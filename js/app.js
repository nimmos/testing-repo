let element = document.getElementById('test');
let sub = document.createElement('button');
sub.appendChild(document.createTextNode('Subscribe'));
sub.onclick = function () { console.log('You subscribed!') };
element.appendChild(sub);

let ages = [];

for (let i=0; i<12; i++) {
	ages.push(Math.ceil( Math.random()*17 ) + 12);
}

let minors = _.filter(ages, function(item) {
	return item < 18;
});

let minor_ages = _.uniq(minors);

let dobs = _.map(ages, function(item){
	return 2019 - item;
});

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

// console.log(ages);
// console.log(minors);
// console.log(minor_ages);
// console.log(dobs);
// console.log(years_of_minors);

let names = ['Alice','Reimu','Claire','Marina','Lucía','Beatrice','Solanna','Marianne'];

let people = _.map(ages, function (age) {
	return {
		'age': age,
		'name': names[Math.floor( Math.random()*(names.length) )]
	}
});

let minor_people = _.reduce(people, function(total,person) {
	return total + ((person.age<18) ? 1 : 0);
}, 0);

let who = {};
let isSomeone = function (age, people) {
	return _.some(people, function (person) {
		if (person.age == age) who = person;
		return person.age == age;
	});
};

let what_age = 23;

console.log(people);
console.log('How many minors: ', minor_people);
console.log('Is someone '+what_age+'? ', isSomeone(what_age, people));
console.log(who);