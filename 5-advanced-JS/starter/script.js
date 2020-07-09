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



// var john={
// 	name:'John',
// 	job:'designer',

// 	presentation:function(style,time){
// 		if(style==="formal"){
// 			console.log('Good '+time+', '+this.name+', this is a '+this.job);

// 		}
// 		else 
// 		{
// 		console.log('Blah blah');
	
// 		}

// }
// };
// var emily={
// 	name:'Emily',
// 	job:'Business',
// };
// john.presentation('formal','afternoon');
// john.presentation.call(emily,'formal','morning');

// emilyformal=john.presentation.bind(emily,null,'tonight');
// emilyformal('formal');


// (function(){
// var question=[];


// var questionds=function(question,answer,correctAnswer){
// 	this.question=question;
	
// 	this.correctAnswer=correctAnswer;

// 	this.answer=answer;

// }
// questionds.prototype.showQuestion=function(){
// 	console.log(this.question);
// 	for (var i = 0; i <=this.answer.length - 1; i++) {
// 		console.log(i+'. '+this.answer[i]);
// 	}
// };
// questionds.prototype.correctQuestion=function(user){
// 	if(user===this.correctAnswer){
// 		console.log('That\'s correct');
// 	}
// 	else
// 	{
// 		console.log('That\'s wrong');
// 	}
// };
// var q1=new questionds('She\'s going to university _____ her studies',['For continuing','For continue'],'0');
// var q2=new questionds('Sorry, but this chair is ______.',['not usually go','do not go usually'],'1');
// var q3=new questionds('I ______ bus on Mondays.',['go to work with','go to work by'],'0');

// var question=[q1,q2,q3];
// var n=Math.floor(Math.random() * question.length); 
// question[n].showQuestion();
// var user=prompt('Please choose the answer:');
// question[n].correctQuestion(user);

// })();

(function(){
var question=[];


var questionds=function(question,answer,correctAnswer){
	this.question=question;
	
	this.correctAnswer=correctAnswer;

	this.answer=answer;

}
questionds.prototype.showQuestion=function(){
	console.log(this.question);
	for (var i = 0; i <=this.answer.length - 1; i++) {
		console.log(i+'. '+this.answer[i]);
	}
};
questionds.prototype.correctQuestion=function(user){
	if(user===this.correctAnswer){
		console.log('That\'s correct');
	}
	else
	{
		console.log('That\'s wrong');
	}
	

};
var q1=new questionds('She\'s going to university _____ her studies',['For continuing','For continue'],'0');
var q2=new questionds('Sorry, but this chair is ______.',['not usually go','do not go usually'],'1');
var q3=new questionds('I ______ bus on Mondays.',['go to work with','go to work by'],'0');

var question=[q1,q2,q3];
function nextQuestion(){
var n=Math.floor(Math.random() * question.length); 
question[n].showQuestion();

if(user!=='exit')
{
var user=prompt('Please choose the answer:');
question[n].correctQuestion(user);
nextQuestion();
}

}
nextQuestion();

})();


