window.onload=function signIn() {
    id=document.getElementById("id");
    console.log(id.value);
    password = document.getElementById("password");
    console.log(password.value);
    if(id.value =="id") {
        if(password.value == "suim") {
            window.location.href = "profile2.html";
        }
        else {
            alert("비밀번호가 틀렸습니다.")
        }
    }
    else {
        alert("아이디 또는 비밀번호가 틀렸습니다.")
    }
}