function openBar(){
    if(document.getElementById("bar-active").classList.contains("open")){
      document.getElementById("bar-active").classList.remove("open");
    }
    else{
      document.getElementById("bar-active").classList.add("open");
    }
};
