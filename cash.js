
var output=document.querySelector("#output-div");
var button=document.querySelector("#button");

var denominations=[2000,500,100,20,10,5,1];

var numberOfNotes=0;

button.addEventListener("click",handler);

function handler(){  
    var bill=Number(document.querySelector("#bill-amount").value);
    var paid=Number(document.querySelector("#amount-paid").value);
    //console.log("bill=",bill);
    //console.log("paid=",paid);


    generateChange(bill,paid);
}


function generateChange(bill,paid){
   // console.log("bill inside=",bill);
    //console.log("paid= inside",paid);
    //console.log(typeof(bill));
    if(bill>0){
        if(paid>bill){
            var change=paid-bill;
            output.innerText=`change to be returned : ${change} \n \nDenominations as follows:\n`;

           for(var i=0;i<denominations.length;i++){
                   numberOfNotes=Math.floor(change/denominations[i]);
                   change=change%denominations[i];
                   output.innerText= output.innerText + `\n${denominations[i]}:\t${numberOfNotes}`;
           }
          

        }
        else{
            if(isNaN(paid))
            output.innerHTML="paid amount must be a number";
            else
            output.innerHTML="paid amount is less than bill!!";
        }

    }
    else{
        if(isNaN(bill))
        output.innerHTML="Bill must be a number";
         else   
           output.innerHTML="Bill must be greater than zero";
    }
}
