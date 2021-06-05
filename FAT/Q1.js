// 19BDS0042 SAMARTH GUPTA

function validate(){
    var name = document.getElementById("name1").value;
    var age = document.getElementById("age1").value;
    var email = document.getElementById("email1").value;
    var phone = document.getElementById("phone1").value;
    patname = /^[a-zA-Z]\w{1,}/;
    patemail = /^[a-zA-Z]\W{1,}\d{1,}@yahoo.com/;
    patphone = /[^0|6]\d{9}/;
    if(!patname.test(name)){
        alert("NAME FORMAT IS WRONG!");
    return;
    }
    if(age<18 || age>85){
        alert("AGE INVALID!");

    return;
    }
    if(patemail.test(email)){
        alert("INVALID E-MAIL!");

        return;
    }
    if(!patphone.test(phone)){
        alert("INVALID PHONE");
        return;
    }

    document.write("<h1>WELCOME </h1>");
    var number = Math.floor(Math.random()*100);
    document.write("<p>Your lucky draw number is "+ number +" !</p>");
    if(number%6 === 0 && number%8 === 0){
    document.write("<h3>Congratulations! You have won!</h3>");
    setTimeout(function(){
        window.location.href = 'Q1_address.html';
        }, 5000);
    }

    }
