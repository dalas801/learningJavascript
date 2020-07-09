// var man=function(name,job,year){
// 	this.name=name;
// 	this.job=job;
// 	this.year=year;
// 	this.calc=function(){
// 		console.log(1990-this.year);

// 	}
// }
// // man.prototype.calc=function(){
// // 		console.log(1990-this.year);

// // 	}
// man.prototype.lastname='nam';
// dung=new man('Dung','Designer','1980');
// // console
// dung.calc();
// var person={
// 	calc:function(){
// 		console.log(1990-this.year);
// }
// };
// var john=Object.create(person);
// john.year=1980;
// john.name='john';

// var year=[1990,1992,1994,1993,1999];
// var age=[];
// function arrayCalc(arr,fn){
// 	var arrRes=[];
// for(var i=0;i<arr.length-1;i++){
// 	arrRes.push(fn(arr[i]));
// }

// 	return arrRes;
// }
// function calcAge(el){
// 	var age=2020-el;
// 	return age;

// }

// age=arrayCalc(year,calcAge) 


// function interViewQuestion(job){

// 	if(job==='designer'){
// 		return function(name)
// 		{
// 		console.log("what do you know this interation UI/UX, "+name);

// 	};
// }
// 	else{
// 		return function(name)
// 		{
// 		console.log("you dont have a question?, "+name);};
// 	}
// }
// var designerQuestion= interViewQuestion('designer');
// designerQuestion('Dung');
// var otherQuestion=interViewQuestion('fd')('Nguyen');


// (function(good){
// 			var number =1;
// 			console.log(number>good);
// 			// console.log(good);
// })(7);
// (function(el){
// 	var number =1;
// 			console.log(number>el);
// // })(1);

// function retirement(retireYear){
// 	return function(birthYear){
// 		console.log(retireYear-(2020-birthYear) + 'la tuoi ve huu');
// 	}

// }
// retirement(2050)(1990);


function interViewQuestion(job){

}