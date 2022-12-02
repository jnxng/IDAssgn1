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