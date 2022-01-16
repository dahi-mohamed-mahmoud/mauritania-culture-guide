function choixprop() {
    var s=0;

    var president=document.getElementsByName("Q1");

if(president[0].checked){
s=s+2;
}
else if(president[1].checked || president[2].checked || president[3].checked){
s=s-1;
}

var independance=document.getElementsByName("Q2");

if(independance[3].checked){
s=s+2;
}
else if (independance[0].checked  || independance[1].checked  || independance[2].checked){
s=s-1;
}


var capitale=document.getElementsByName("Q3");

if(capitale[1].checked){
s=s+2;
}
else if (capitale[0].checked || capitale[2].checked || capitale[3].checked){ 
s=s-1 ;
}




var langue=document.getElementsByName("Q4");

if ( (langue[0].checked && langue[2].checked==true) && (langue[1].checked && langue[3].checked==false)){
s=s+2;
}
else if(langue[1].checked  &&  (langue[0].checked || langue[2].checked  ||langue[3].checked  ) || langue[0].checked || langue[1].checked  || langue[2].checked || langue[3].checked ||(langue[3].checked && (langue[2].checked ||langue[0].checked))){
s=s-1;
}



if(s!=0){
s=s+2;
alert("votre score est : "+s);
}
else if(s==0){
var  piege=document.getElementsByName("Q5");

var reponse=prompt("Whats the number of the wrong question ?");
if(reponse==6){
s=s+2;
}
else{
s=s-1;
}
alert("Votre score est :" +s);
}
}