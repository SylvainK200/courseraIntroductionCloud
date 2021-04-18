function compute()
{
    amount = parseInt(document.getElementById("principal").value);
    rate = parseFloat(document.getElementById("rate").value);
    years =parseInt(document.getElementById("years").value);
    let receive = amount;
    var d= new Date();
    dateFinal = parseInt(d.getFullYear())+years;
    for (i=1;i<=years;i++){
        receive=receive*((rate+100)/100);
    }
    receive=parseInt(receive)
    p= document.getElementById("result");
    p.innerHTML="<p>If you deposit <span> "+amount+",</span><br>"+
                "at an interest rate of <span> "+rate+"%.</span><br>"+
                "You win receive an amount of <span>"+receive+" </span>,<br>"+
                "in the year <span>"+dateFinal+"</span></p>";
}
function changeValue(val){
   p=document.getElementById("value");
    p.innerHTML=val +"%";
}
        