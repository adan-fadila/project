 let currentTab = 0;
 let levelTitle = ["personal information","diagnosis","medical data","last step"]
window.onload = function(){
    showTab(currentTab);
};

function showTab(n) {
  // This function will display the specified tab of the form...
  let x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // let level = document.getElementById("level");
  // level.append(" " + levelTitle[currentTab]);
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
  let x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
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
function validDiagnosis(inputs){
  if(inputs.length == 0){
    return true;
  }
  for(let i = 0; i <= inputs.length; i++){
    if(inputs[i].checked){
      return true;
    }
  }
  return false;
}

function validateForm() {
 
  let x, valid = true;
   x = document.getElementsByClassName("tab");
  let stringInput = x[currentTab].getElementsByClassName("string-input");
  let numbergInput = x[currentTab].getElementsByClassName("number-input");
  let diagnosisInput = x[currentTab].getElementsByClassName("diagnosis-check");
  let sendInfo = x[currentTab].getElementsByClassName("send-medical-info-check");

  valid = validStringInput(stringInput) && validNumberInput(numbergInput) && validDiagnosis(diagnosisInput)&& validDiagnosis(sendInfo);
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
  let i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

