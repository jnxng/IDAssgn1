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
    var gender = document.getElementById("gender");
    var comment = document.getElementById("comment");

    temp_gender.checked ? gender = "Male" : gender = "Female";

    localStorage.setItem("Is_first_name", first_name);
    localStorage.setItem("Is_last_name", last_name);
    localStorage.setItem("Is_age", age);
    localStorage.setItem("Is_gender", gender);
    localStorage.setItem("Is_comment", comment);




}





// function Feedback(fn,ln,age,gender,comment){
//     this.fn= fn
//     this.ln = ln
//     this.age = age
//     this.gender = gender
//     this.comment = comment

//     this.
// }