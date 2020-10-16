
export const change = () => {
    
    var body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = "#201b26";
    var copyright = document.getElementsByClassName("copyright-text");
    copyright[0].style.color = "#d9c2c2";
    var mainHeading = document.getElementsByClassName("main-heading");
    mainHeading[0].style.color = "#d9c2c2";
    var small = document.getElementsByClassName("date");
    for(var i = 0 ; i < small.length;i++)
    {
        small[i].style.color = "#d9c2c2";
        small[i].style.transition = "all 1s cubic-bezier(0.6, -0.28, 0.735, 0.045)";
    }
        
    body[0].style.transition = "all 1s cubic-bezier(0.6, -0.28, 0.735, 0.045)";
    copyright[0].style.transition = "all 1s cubic-bezier(0.6, -0.28, 0.735, 0.045)";
    mainHeading[0].style.transition = "all 1s cubic-bezier(0.6, -0.28, 0.735, 0.045)";
        

}

export const changeBack = () => {
    
    var body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = "#fefcf8";
    var copyright = document.getElementsByClassName("copyright-text");
    copyright[0].style.color = "#1a2c3d";
    var mainHeading = document.getElementsByClassName("main-heading");
    mainHeading[0].style.color = "#1a2c3d";
    var small = document.getElementsByClassName("date");
    for(var i = 0 ; i < small.length;i++)
    {   
        small[i].style.color = "#1a2c3d";
        small[i].style.transition = "all 1s cubic-bezier(0.6, -0.28, 0.735, 0.045)";
    }
        
    body[0].style.transition = "all 1s cubic-bezier(0.6, -0.28, 0.735, 0.045)";
    copyright[0].style.transition = "all 1s cubic-bezier(0.6, -0.28, 0.735, 0.045)";
    mainHeading[0].style.transition = "all 1s cubic-bezier(0.6, -0.28, 0.735, 0.045)";
}




export const dualMode = () =>
{
    const switchBox = document.querySelector(".sun-moon");

    document.querySelector("input").addEventListener("change", (e) => {
    const { checked } = e.target;   
    if (checked) {
        switchBox.classList.add("move");
        change();
    } else {
        switchBox.classList.remove("move");
        changeBack();
        
    }
});
}