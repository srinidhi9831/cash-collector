function countNotes(){
var one=0,five=0,ten=0,twenty=0,hundred=0,fiveHundred=0,twoThousand=0;
var bill=document.getElementById("bill-amount").value;
var paid=document.getElementById("amount-paid").value;
var change = paid-bill;
var Ch=change;
while(change>0)
{
    if(change>=2000)
    {
        change=change-2000;
        twoThousand++;

    }
    if(change>=500 && change<2000)
    {
        change=change-500;
        fiveHundred++;
    }
    if(change>=100 && change<500)
    {
        change=change-100;
        hundred++;
    }
    if(change>=20&& change<100)
    {
        change=change-20;
        fiveHundred++;
    }
    if(change>=10 && change<20)
    {
        change=change-10;
        ten++;
    }
    if(change>=5 && change<10)
    {
        change=change-5;
        five++;
    }
    if(change>=1 && change<5)
    {
        change=change-1;
        one++;
    }

}
document.getElementById("output-div").innerText=" change to be returned :" + Ch +"\nDenominations as follows \n 2000 :" + twoThousand + "\n500:" +fiveHundred + "\n100:" + hundred+"\n20:"+twenty+"\n10:"+ten+"\n5:"+five+"\n1:"+one;
}