const menutoggle = document.querySelector(".toggle");
        const navigation = document.querySelector(".navbar");
        menutoggle.onclick = function(){
            menutoggle.classList.toggle("active")
            navigation.classList.toggle("active")
        }


// js
window.onscroll = function(){
    myFunction()
};
var header = document.getElementById('myheader');
var sticky = header.offsetTop;
function myFunction(){
    if (window.pageYOffset > sticky){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
}

// scroll spy 
const menuSection = document.querySelectorAll('nav li');

// for clickable event

menuSection.forEach( v => {
    v.onclick = (() => {
        setTimeout(() => {
            menuSection.forEach(j => j.classList.remove('active'))
            v.classList.add('active')
        }, 300)
    })
})


// FORM 



let name = document.getElementById("name").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value

function register(){
    if (name == "" || name == undefined || email == "" || email == undefined || ! password)
        document.getElementById("error").innerText = "All fields are required";
        return


        // console.log(name, email, password);

        let userObject = {name, email, password};
        // localStorage.setItem("register", JSON.stringify(userObject));
        // document.getElementById("error", "Your registration was successful, proceed to login");
        return
    }

function login(){
    let emailLogin = document.getElementById("email-login").value
    let passwordLogin = document.getElementById("password-login").value

    if (emailLogin ===  email && passwordLogin === password){
        document.getElementById("error", "Login successful!");
        return
    }
    else{
        document.getElementById("error", "Email or password incorrect!");
    }
}

