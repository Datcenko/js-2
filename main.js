var string = 'string'; 
	alert(string);
	console.log(string);

var browser ={
	name: 'Chrome',
	color: 'green',
	sayHi:function(){
		return'Welcome';
	}
}
	console.log(browser.name);
	console.log(browser.color);
	console.log(browser.sayHi());

	var Name = 'Sevan',Status;

switch(Name) {
	case 'Pacific': Status = 'Ocean'; break;
	case 'Black': Status = 'Sea'; break;
	case 'Baikal': Status = 'Lake'; break;
	default: Status = 'somewhere in the World';
}
document.write(Name + ' ' + Status);

var x = 18;
var text = x > 18 ? 'x больше 18' : x < 18 ? 'x меньше 18' : 'x равен 18';
	console.log(text);

 
for (var i = 2; i <= 20; i++){ 
	if (i % 2 == 0) 
	console.log(i);
}

var i=0;
	while (i<8){
		console.log(i);
		i++;
	}


function degree(arg1, arg2, callback){
	alert('Число arg1 в степени arg2');
	var arg3 = Math.pow(arg1, arg2);
	callback(arg3);
}

degree(2, 4 , function(num){
	alert("Результат arg3 =" + num);
});