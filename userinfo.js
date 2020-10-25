let name = sessionStorage.getItem("name");
let correct_ans = sessionStorage.getItem("correct_ans");
let answer = sessionStorage.getItem("answer");
let verification = sessionStorage.getItem("verification");
var a=answer.split(",");
console.log(a);
console.log(correct_ans);
var b=verification.split(",");
//document.querySelector(".name").innerHTML = name;
document.querySelector(".correct_ans").innerHTML = correct_ans;
//document.getElementById("correctanswer").innerHTML = correct_ans;
var text="";
var j=0;
for(var  i=0;i<b.length;i++){
	if(b[i].toUpperCase()=="WRONG X"){
		text+= i+1+".  "+"Wrong x"+"  --->>  "+a[j] +"<br>";
		j++;
	}
	else{
		text+= i+1+".  "+b[i] +"<br>";
	}
	
}
document.getElementById("answer").innerHTML = text;
//document.querySelector(".answer").innerHTML = a;
//document.querySelector(".verification").innerHTML = b;