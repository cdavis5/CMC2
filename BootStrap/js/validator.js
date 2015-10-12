function chkFields() {  
    var init = document.getElementById("initial"); //initial password
    var sec = document.getElementById("second"); // second password

  //var error = document.getElementById("errorMessage")

    //check if the initial password matches the second password
    if (init.value != sec.value) {

    error = document.getElementById("errorMessage");
    txt = document.createTextNode("THERE WAS A PROBLEM WITH YOUR REQUEST! \n" +
          "Please check that your passwords match and try again.");
    error.innerText = txt.textContent;
          
    return false; 
  }
    else
        return true;
}
