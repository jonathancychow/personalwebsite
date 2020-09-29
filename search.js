//creates a listener for when you press a key
window.onkeyup = keyup;

//creates a global Javascript variable




function gobrowser(){
    var inputTextValue;
    var vehicle = document.getElementById("selectvehicle").value;
    var clickcheck = document.getElementById("checked");
    var inputsomething = document.getElementById("searchaddress").value;
    document.getElementById('checked').onclick = function(){
        window.location = "https://www.google.com/maps/dir/"+inputsomething+"/10.7296449,106.6924012/@10.7632822,106.6735481,13z/data=!4m2!4m1!3e"+vehicle+"?hl=en;%22"
    
}

}