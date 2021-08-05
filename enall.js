/*function open()
{
    alert("java open page work");
}*/
function add()
{
    a=Number(document.getElementById("tamil").value);
    b=Number(document.getElementById("eng").value);
    c=Number(document.getElementById("sci").value);
    r=a+b+c;
    document.getElementById("result").innerHTML="Total: "+r;
}
