function album(obj){
    if(obj.getAttribute("id") == "img1"){
        if(obj.getAttribute("src") == "images/album1.jpg"){
            console.log("test");
            obj.removeAttribute("src");
            obj.setAttribute("src", "images/album1c.jpg");
        } else{
            obj.removeAttribute("src");
            obj.setAttribute("src", "images/album1.jpg");
        }
    }
    else if(obj.getAttribute("id") == "img2"){
        if(obj.getAttribute("src") == "images/album2.jpg"){
            console.log("test");
            obj.removeAttribute("src");
            obj.setAttribute("src", "images/album2c.jpg");
        } else{
            obj.removeAttribute("src");
            obj.setAttribute("src", "images/album2.jpg");
        }
    }
    else if(obj.getAttribute("id") == "img3"){
        if(obj.getAttribute("src") == "images/album3.jpg"){
            console.log("test");
            obj.removeAttribute("src");
            obj.setAttribute("src", "images/album3c.jpg");
        } else{
            obj.removeAttribute("src");
            obj.setAttribute("src", "images/album3.jpg");
        }
    }
    else if(obj.getAttribute("id") == "img4"){
        if(obj.getAttribute("src") == "images/album4.jpg"){
            console.log("test");
            obj.removeAttribute("src");
            obj.setAttribute("src", "images/album4c.jpg");
        } else{
            obj.removeAttribute("src");
            obj.setAttribute("src", "images/album4.jpg");
        }
    }
}

let feedbackList = [];
function addFeedback(event){
    event.preventDefault();
    var first_name = document.getElementById("fn");
    var last_name = document.getElementById("ln");
    var age = document.getElementById("age");
    var gender1 = document.getElementById("gender1");
    var gender2 = document.getElementById("gender2");
    var comment = document.getElementById("comment");

    if(gender1.checked == true){
        gender = "Male"
    }
    else if(gender2.checked == true){
        gender = "Female"
    }



    localStorage.setItem("Is_first_name", first_name);
    localStorage.setItem("Is_last_name", last_name);
    localStorage.setItem("Is_age", age);
    localStorage.setItem("Is_gender", gender);
    localStorage.setItem("Is_comment", comment);

}

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('acitve')
})



