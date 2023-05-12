 let currentTab = 0;
 
window.onload = function(){
    showTab(currentTab);
};

function showTab(n) {
  // This function will display the specified tab of the form...
  let x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  let x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}
function validStringInput(inputs){
  let stringValid = true;

   for(let i = 0; i < inputs.length; i++){

      if(!/^[a-zA-Z]+$/.test(inputs[i].value)){
        
        inputs[i].classList.add("invalid");

        stringValid = false;
      }
  }
  return stringValid;
}
function validNumberInput(inputs){
  let numberValid = true;

   for(let i = 0; i < inputs.length; i++){

      if(! /^\d*$/.test(inputs[i].value) ){
        
        inputs[i].classList.add("invalid");

        numberValid = false;
      }else{
        if(inputs[i].classList.contains("invalid")){
          inputs[i].classList.remove("invalid");
        }
      }
  }
  return numberValid;
}

function validateForm() {
  // This function deals with validation of the form fields
  let x, y, i, valid = true;
   x = document.getElementsByClassName("tab");
  // y = x[currentTab].getElementsByTagName("input");
  let stringInput = x[currentTab].getElementsByClassName("string-input");
  let numbergInput = x[currentTab].getElementsByClassName("number-input");
  let diagnosisInput = x[currentTab].getElementsByClassName("diagnosis-opt");
  // A loop that checks every input field in the current tab:
  // for (i = 0; i < y.length; i++) {
  //   // If a field is empty...
  //   if (y[i].value == "") {
  //     // add an "invalid" class to the field:
  //     y[i].className += " invalid";
  //     // and set the current valid status to false
  //     valid = false;
  //   }
  // }
  valid = validStringInput(stringInput) && validNumberInput(numbergInput);
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  let i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}