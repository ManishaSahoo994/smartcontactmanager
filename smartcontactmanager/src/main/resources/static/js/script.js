console.log("Script loaded");

//change theme work
let currentTheme=getTheme();
//initial

document.addEventListener("DOMContentLoaded", () =>{
    changeTheme();

});

//TODO:
function changeTheme(){
    //set to web page
    changePageTheme(currentTheme, currentTheme);
    //set the listener to change theme button
   const changeThemeButton = document.querySelector('#theme_change_button');
   
   const oldTheme = currentTheme;
   changeThemeButton.addEventListener("click", (event)=>{
    const oldTheme = currentTheme;
    console.log("change theme button clicked");
    
    if(currentTheme === "dark"){
        //theme to light
        currentTheme = "light";
    }else{
        //theme to dark
        currentTheme = "dark";
    }
    changePageTheme(currentTheme, oldTheme);
   
   });

}

//set theme to localstorage
function setTheme(theme){
    localStorage.setItem("theme","theme");
}


//get theme from localstorage
function getTheme(){
    let theme=localStorage.getItem("theme")
   // if(theme) return theme;
   // else return "light" ;

   return theme? theme: "light";
}

//change current page theme
function changePageTheme(theme,oldTheme){


     //localstorage update
     setTheme(currentTheme);
     //remove the current theme
     document.querySelector('html').classList.remove(oldTheme);
     //set the current theme
     document.querySelector('html').classList.add(theme);
 
     //change the text of the button
     document.querySelector('#theme_change_button').querySelector('span').textContent = 
     theme == "light" ? "Dark" : "Light";

}