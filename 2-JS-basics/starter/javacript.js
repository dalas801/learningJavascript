

var yourname;
yourname='dungbui';
var age;
age=29;
console.log(yourname+ ' '+ age );

// comment
var job="teacher", isMarried="true";

job="teacher";
isMarried="true";
console.log(job +' '+ isMarried)

age="hai muoi chin"
job="drive";
// alert(job +' '+ age );

var lastname;
// lastname=prompt('what your lastname');
// console.log(yourname+ ' ' + lastname);


/*--------- Caculator ---------------*/
var dung,nguyen,now;
now=2009;
dung=now-200;
nguyen=now-300;
var sosanh= dung < nguyen;

console.log(sosanh);
console.log(typeof(dung) + " " +typeof(sosanh)+ " " +typeof(yourname) + " " + typeof(lastname));


var x=10;
x*=2;
console.log (x);

/*--------- BMI ---------------*/
var massMark,massJohn,heightMass,heightJohn,bmiMark,bmiJohn;

heightMass=50;
heightJohn=60;
massMark=100;
massJohn=120;
bmiMark=massMark/(heightMass*heightMass);
bmiJohn=massJohn/(heightJohn*heightJohn);

if(bmiMark<bmiJohn)
{
console.log('is Mark\'s BMi higher John\'s BMI? ' + " "+ sosanh);
}
else
{console.log('is Mark\'s BMi shorter John\'s BMI? ' + " "+ sosanh);}

/*--------- if ---------------*/

var name="dung";
var age="20";

if(age<13)
{
	console.log(name + " " + "is a teenager");

}else if(age>13 && age<=20)
{
	console.log(name + " " + "is a young man");

}else
{
	console.log(name +" " + "is a  man");
	
}

/*--------- if rút gọn ---------------*/

age<13 ? console.log(name + " " + "is a teenager") : console.log(name + " " + "is a young man");


/*--------- switch case ---------------*/
switch(true){
case(age<13): console.log(name + " " + "is a teenager");
break;
case(age>13 && age<=20): console.log(name + " " + "is a young man");
break;
default:console.log(name + " " + "is a man");
break;

}


switch(job){
 case 'teacher': 
 	console.log(name + " " + "is a teacher");
 break;
 case 'designer': 
 	console.log(name + " " + "is a designer");
 break;
 default:
 	console.log(name + " " + "is a no job");
 }


 /*--------- truthy value ---------------*/
 var height="";
 if(height)
 {
console.log("this is defined variable");
 }
 else
 {
console.log("this is not defined variable");
 }


  /*--------- ex ---------------*/

var johnteam,miketeam,average,marry
johnteam=(89+120+103)/3;
miketeam=(116+94+123)/3;
marry=(97+134+105)/3;
console.log("average point of john team is" + " "+ johnteam);
console.log("average point of mike team is" +" "+ miketeam);
console.log("average point of merry team is" +" "+ marry);




if(johnteam>miketeam && johnteam > marry){console.log("john team win with" + " "+ johnteam + " point");}

else if(johnteam < miketeam && miketeam < marry){console.log("marry team win with" + " "+ marry + " point");}

else
{console.log("john team win with" + " "+ johnteam + " point");}


  /*--------- function ---------------*/

  function cacuage(birthday)
  {return 2018-birthday;
  }

  var agejohn=cacuage(1990);
  console.log(agejohn);

  function retirementage(year,firstname){
  	var age=cacuage(year);
  	var retirement=65-age;

  }