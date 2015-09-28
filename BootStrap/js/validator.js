function chkFields() { 
 
  var init = document.getElementById("initial"); //initial password
  var sec = document.getElementById("second"); // second password
  var initE = document.getElementById("iemail"); //intital email
  var secE = document.getElementById("semail"); // second email email
 
    //checks if the email or password is blank
    //check if the intital email mataches the second email
    //check if the initial password matches the second password
    if ((init.value == "") || (initE.value == "")){
    /* alert("THERE WAS A PROBLEM WITH YOUR REQUEST! \n" +
          "Please enter your password. \n" +
          "Please check that your passwords match and try again. \n");   
    */


    error = document.getElementById("errorMessage");
        txt = document.createTextNode("THERE WAS A PROBLEM WITH YOUR REQUEST! \n" +
              "Please enter your password. \n" +
              "Please check that your e-mail addresses match and try again. \n" +
              "Please check that your passwords match and try again.");
        error.innerText = txt.textContent;

    return false; 
  }
    else
        return true;
}


/*function chkEmail() { 
  var initE = document.getElementById("iemail");
  var secE = document.getElementById("semail");
  if (initE.value == "") {
    alert("You did not enter a email. \n" +
          "Please enter one now");
    return false;
  }
  if (init.value != secE.value) {
    alert("The two email's you entered are not the same \n" +
          "Please re-enter both now");
    return false;
  } else
    return true;
}
*/

/*function chkFields() { 
  var init = document.getElementById("initial");
  var sec = document.getElementById("second");
  var initE = document.getElementById("iemail");
  var secE = document.getElementById("semail");
 
  if (init.value == "") {
    alert("You did not enter a password \n" +
          "Please enter one now");
    //return false;
  }
    
    if (initE.value == "") {
    alert("You did not enter a email. \n" +
          "Please enter one now");
    return false;
  }
    
  if (init.value != sec.value) {
    alert("The two passwords you entered are not the same \n" +
          "Please re-enter both now");
    return false;
  } else
    return true;
}
*/
/*
  if (initE.value == "") {
    alert("You did not enter a email. \n" +
          "Please enter one now");
    return false;
  }
  if (init.value != secE.value) {
    alert("The two email's you entered are not the same \n" +
          "Please re-enter both now");
    return false;
  } else
    return true;
}
*/




