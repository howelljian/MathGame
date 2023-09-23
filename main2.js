var count1 = 0;
var count2 = 0;
var value = 0;

function New()
{
    
    count1 = Math.floor(Math.random()*10);
    count2 = Math.floor(Math.random()*100);
    document.getElementById("Problem").innerHTML= count1 + " x " + count2;
    document.getElementById("user_input").value= "";
    document.getElementById("confirm").innerHTML= "";
    document.getElementById("reveal").innerHTML= "";
}

function Submit()
{
    value = document.getElementById("user_input").value;
    if(count1*count2 == value)
    {
        document.getElementById("confirm").innerHTML= "Correct";
    }
    else
    {
        document.getElementById("confirm").innerHTML= "Incorrect";
    }
}

function Reveal()
{
    document.getElementById("reveal").innerHTML= count1*count2;
}

function Change()
{
    window.location = "index.html";
}