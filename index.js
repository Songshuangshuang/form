var flag = true;
var password = document.getElementsByName("password")[0];
var confirm = document.getElementsByName("confirm")[0];
var submitBtn = document.getElementsByClassName("submit")[0];
submitBtn.onclick = function() {
    if(confirm.value != password.value) {
        alert("两次输入密码不一致,请重新输入");
        event.preventDefault();//阻止跳转
    }
}

    


   


   
    
    

    

