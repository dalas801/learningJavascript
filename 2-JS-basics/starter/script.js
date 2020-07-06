
// var ageCacul=function(name,age)
// {
//     return (name + " có tuổi là " + age);
// }
// ageCacul('dung',10);


// function tinhtoan(age)
// {
// 	console.log(age);
// }
// tinhtoan(10);

/*var names=["dung", "designer", "1990"];

console.log(names);
console.log(names[2]);
console.log(names.length);
names[names.length]="mai";
console.log(names);
names.push("diep");
names.unshift("tram");

console.log(names);
console.log(names.indexOf('designer'));
var isdesigner=names.indexOf('designer')===-1?"là designer" :" không là designer";

console.log(isdesigner);*/



// function tipmoney(money)
// {
// 	if(money<50){
// 		return (20/100)*money;
// 	}
// 	else if (money>=50 && money<=200){
// 		return (15/100)*money;
// 	}
// 	else
// 		{
// 		return (10/100)*money;
// 	}
// }
// var moneylist=[124,48,268];
// console.log(tipmoney(moneylist[0]));
// var tiplist=[tipmoney(moneylist[0]),tipmoney(moneylist[1]),tipmoney(moneylist[2])];
// console.log(tiplist);
// var finallist=[moneylist[0]+tiplist[0],moneylist[1]+tiplist[1],moneylist[2]+tiplist[2]];
// console.log(finallist);


// var names ={
// 	firstname: 'dung', lastname: 'bui',job: 'designer', old: 28
// }
// console.log(names);
// console.log(names.job);
// names.gender='nam';

// console.log(names);
// names['old']='alone';
// console.log(names);
// var names2=new Object();
// names2['old']='alone';
// console.log(names2);
/*Mark and John are trying to compare
 their BMI (Body Mass Index), which is 
 calculated using the formula: 
 BMI = mass / height^2 = mass / (height * height).
  (mass in kg and height in meter).

1. Store Mark's and John's mass 
and height in variables
2. Calculate both their BMIs
3. Create a boolean variable
 containing information about whether Mark has a higher BMI than John.
4. Print a string to the console
 containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").*/
// var mark={
// 	fullname:mark,
// 	mass:250,
// 	height:2,
// 	calcbmi: function(){
// 		this.bmi= this.mass/(this.height*this.height);
		
// 	}
// };
// var john={
// 	fullname:john,
// 	mass:200,
// 	height:1.5,
// 	calcbmi: function(){
// 		this.bmi= this.mass/(this.height*this.height);
		
// 	}
// };
// mark.calcbmi();

// john.calcbmi();
// console.log(mark,john);
// if(mark.bmi>john.bmi){
// 	console.log("mark's bmi higher john's bmi" );
// }
// else if(mark.bmi<john.bmi){
// 	console.log("mark's bmi shorter john's bmi" );
// }
// else{
// 	console.log("they are the same");
// }

// var names ={
// 	firstname: 'dung', lastname: 'bui',job: 'designer', old: 28
// }
// var names =[
// 	'dung',  'bui', 'designer',  28,'hoa'
// ];


// for(var  i = 0;i < names.length;i++)
// {
// 	console.log(names[i]);
// }

// var i=0;
// while(i < names.length){
// console.log(names[i]);
// i++;
// }
// for(var i = 0;i < names.length;i++){
// 	if(typeof names[i]!=='string') continue;
// 	console.log(names[i]);
// }
// for(var i = 0;i < names.length;i++){
// 	if(typeof names[i]!=='string') break;
// 	console.log(names[i]);
// }
// console.log(names[4]);
// for(var i=names.length-1;i>=0;i--){
// 	console.log(names[i]);
// }

var john={
	names: 'john',
	bill: [124,48,268,180],
	caltip: function(){
		this.tip=[];

		for(var  i=0 ;i < this.bill.length;i++){
			var percent;
			var bill=this.bill[i];
			if(bill <50){
			percent=0.2;}
			else if (bill>=50 && bill<=200){
				percent=0.15;
			}
			else
			{
				percent=0.1;
			}
			this.tip[i]=bill*percent;
		}
		return this.tip;
	},
	calfinal: function(){
		this.finalbill=[];
		var i=0;
		while(i<this.bill.length){
this.finalbill[i]=this.bill[i]+this.tip[i];
i++;
}
return this.finalbill;
	}
}

john.caltip();
john.calfinal();



var mark={
	names:'mark',
	bill:[77,375,110,45],
	caltip: function(){
		this.tip=[];

		for(var  i=0 ;i < this.bill.length;i++){
			var percent;
			var bill=this.bill[i];
			if(bill <100){
			percent=0.2;}
			else if (bill>=100 && bill<=300){
				percent=0.1;
			}
			else
			{
				percent=0.25;
			}
			this.tip[i]=bill*percent;
		}
		return this.tip;
	}

}
mark.caltip();
function average(tips){
	var i=0;
	var sumtip=0;
	var averagetip;
	while(i<tips.length){
		sumtip=sumtip+tips[i];
		i++;
	}
	return sumtip;
}
console.log(mark.tip.length);
console.log(average(mark.tip));
if(average(mark.tip)>average(john.tip))
{
	console.log("Tip Mark is higher than John" + average(mark.tip));
}
else if(average(mark.tip)<average(john.tip)){
	console.log("Tip John is higher than Mark" +average(mark.tip));
}
else{
	console.log("Tip John is same than Mark");
}
