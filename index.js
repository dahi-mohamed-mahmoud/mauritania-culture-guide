function choixprop() {
            var s=0 ;
            var president=document.getElementsByName("1");
        
if(president[0].checked){
s=s+2;
}
else if(president[1].checked || president[2].checked || president[3].checked){
               s=s-1;
}


var independance=document.getElementsByName("2");

if(independance[3].checked){
               s=s+2;
}
else if (independance[0].checked  || independance[1].checked 
                                  || independance[2].checked){
                s=s-1;
}


 var capitale=document.getElementsByName("3");

if(capitale[1].checked){
     s=s+2;
}
else if (capitale[0].checked || capitale[2].checked 
                             || capitale[3].checked){ 
    s=s-1 ;
}


 

    var langue=document.getElementsByClassName("s");

if (langue[0].checked && langue[1].checked){
             s=s+2;
}
    else if(langue[2].checked || langue[3].checked || (langue[0].checked &&langue[1].checked && langue[2].checked && langue[3].checked)){

     s=s-1;
}



if(s!=0){
    piege=document.getElementsByName("5");
    if(piege[0].checked || piege[1].checked || piege[2].checked || piege[3].checked)
{s=s-1; 
    alert("votre score est : "+s);
}
else {s=s+2;
    alert("votre score est : "+s);}

}
else if(s==0){
    piege=document.getElementsByName("5");
    if(piege[0].checked || piege[1].checked || piege[2].checked || piege[3].checked)
{s=s-1; 
    alert("votre score est : "+s);
}
else{
var  piege=document.getElementsByName("5");

var reponse=prompt("Whats the number of the wrong question ?");
if(reponse==5){
s=s+2;
}
else{
s=s-1;
}
alert("Votre score est :" +s);
}
}
if(s>=8){
    alert("very good knowledge of Mauritania ");   
   }
   else if (s>=6 && s<8){
       alert(" good knowledge of Mauritania ");
   }
   else if(s>=4 && s<6){
       alert(" Average knowledge of Mauritania");
   }
   else if(s<4){
       alert("poor knowledge of Mauritania ");
   }
   alert(" answer 1= Ghazouani .\n answer 2= 28 november 1960 .\n answer 3=Nouackchott .\n answer 4=wolf and arabic. \n answer 5= none . ");

}