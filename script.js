function convert(){
    const str=document.getElementById("input").value;
    str.trim();
    const result=document.getElementById("result");
    if(str==="")
    {
        alert("Enter a sentence")
        return;
    }
    const arr=str.split(" ");
    result.innerHTML="Total no of words : "+arr.length;
}