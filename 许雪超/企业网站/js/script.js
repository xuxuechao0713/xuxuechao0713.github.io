function checkName(){
    var a=document.getElementById("name").value;
    if(a==""){
        document.getElementById("nameSpan").innerHTML="姓名不能为空";
    }else if(a.length<3){
        document.getElementById("nameSpan").innerHTML="姓名不能少于4位";
    }else if(a.length<10){
        document.getElementById("nameSpan").innerHTML="√";
    }else{
        document.getElementById("nameSpan").innerHTML="名字太长";
    }
}

function checkPhone(){
    var a=document.getElementById("phoneNum").value;
    var b=/^1\d{10}$/;
    if(b.test(a)){
        document.getElementById("phoneNumSpan").innerHTML="√";
    }else if(a==""){
        document.getElementById("phoneNumSpan").innerHTML="手机号不能为空";
    }else{
        document.getElementById("phoneNumSpan").innerHTML="×";
    }
}
function checkEmail(){
    var a=document.getElementById("email").value;
    var b=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (b.test(a)){
        document.getElementById("emailSpan").innerHTML="√";
    }else if(a==""){
        document.getElementById("emailSpan").innerHTML="邮箱不能为空";
    }else{
        document.getElementById("emailSpan").innerHTML="×";
    }
}
function checkPwd(){
    var a=document.getElementById("pwd").value;
    if(a==""){
        document.getElementById("pwdSpan").innerHTML="密码不能为空";
    }else if(a.length<6){
        document.getElementById("pwdSpan").innerHTML="×";
    }else if(!isNaN(a)){
        document.getElementById("pwdSpan").innerHTML="密码不能为纯数字";
    }else{
        document.getElementById("pwdSpan").innerHTML="√";
    }
}
function checkPwd2(){
    var a=document.getElementById("pwd").value;
    var b=document.getElementById("pwd2").value;
    if(a!=b){
        document.getElementById("pwd2Span").innerHTML="×";
    }else if(b==""){
        document.getElementById("pwd2Span").innerHTML="密码不能为空";
    }else{
        document.getElementById("pwd2Span").innerHTML="√";
    }
}