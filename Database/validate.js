function validateAll(){
    
    if (myFunction){
        document.form.submit();
    }
}
function myFunction() 
 { 
      var lnameValue = document.getElementById("lname").value;
	  var fnameValue = document.getElementById("fname").value;
	  var MIValue = document.getElementById("MI").value;
	  var studnumValue = document.getElementById("studnum").value;
	  var letters = /^[A-Za-z]+$/;
	  var numbers = /^[0-9]+$/;
      
	  if(lname.value.match(letters))
      {
        setSuccessFor(lname);	
			return true;		
      }
       else {
		setErrorFor(lname, 'Alphabet Characters only');
      }
	  
	  if(fname.value.match(letters))
       {
        setSuccessFor(fname);	
			return true;		
      }
       else {
		setErrorFor(fname, 'Alphabet Characters only');
      }
	  
	  
	  if(MI.value.match(letters))
      {
        setSuccessFor(MI);	
			return true;		
      }
       else {
		setErrorFor(MI, 'Alphabet Characters only');
      }
	  
	  if(studnum.value.match(numbers))
      {
        setSuccessFor(studnum);	
			return true;		
      }
       else {
		setErrorFor(studnum, 'Numerical Characters only');
      }
	  return false;
      }
	  
function setErrorFor(input, message) {
	var formControl = input.parentElement;
	var small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	var formControl = input.parentElement;
	formControl.className = 'form-control success';
}