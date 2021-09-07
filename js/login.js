window.onload=function signIn() {
    id= document.getElementById("id");
    console.log(id.placeholder)
    password=document.getElementById("password");
    console.log(password.placeholder)
    Loggingin = document.getElementById("Log-in");
    
    function Login() {
        id=document.getElementById("id");
        console.log(id.value);
        password = document.getElementById("password");
        console.log(password.value);
        if(id.value =="Kim") {
            if(password.value == "suim") {
                window.location.href = "https://www.naver.com/";
            }
            else {
                alert("비밀번호가 틀렸습니다.")
            }
        }
        else {
            alert("아이디 또는 비밀번호가 틀렸습니다.")
        }
    }
}