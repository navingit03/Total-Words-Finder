function convert(){
    let str=document.getElementById("input").value;
    str=str.trim();
    const result=document.getElementById("result");
    if(str==="")
    {
        alert("Enter a sentence")
        return;
    }
    const arr=str.split("\\s+");
    result.innerHTML="Total no of words : "+arr.length;
}
