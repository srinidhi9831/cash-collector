
var output=document.querySelector("#output-div");
var button=document.querySelector("#button");
var block=document.querySelector("#next-block");
var bill=document.querySelector("#bill-amount");
var paid=document.querySelector("#amount-paid");

var denominations=[2000,500,100,20,10,5,1];

var numberOfNotes=0;

bill.addEventListener("keyup",function keyupHandler(){
    if(isNaN(bill.value)){
        alert("please input numbers only!")
        
    }
    else if(bill.value===""){
        block.style.display="none";
    }
    else{
        block.style.display="block";
    }
});

button.addEventListener("click",handler);

function handler(){  
    
    // console.log("bill=",bill.value);
    // console.log("paid=",paid.value);

    if(validate())
    generateChange(Number(bill.value),Number(paid.value));
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
        else if(paid===bill){
            output.innerHTML="NO change to be returned";  
        }
        else{
            output.innerHTML="paid amount is less than bill!!";
        }

    }
    else{
          
           output.innerHTML="Bill must be greater than zero";
    }
}

function validate(){
    if(bill.value==="" || paid.value===""){
       alert("please fill details");
       return false;
    }
    else if(isNaN(paid.value)){
      alert("enter numbers only");
      return false;
    }
    else if(bill.value<=0){
        alert("bill must be greater than zero");
        return false;
    }
    else
      return true;
}