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
	var mobnumValue = document.getElementById("mobnum").value;
	var bday = document.getElementById("bday").value;
	  
	var letters = /^[A-Za-z]+$/;
	var numbers = /^[0-9]+$/;
	var now = new Date();
	var birthdate = bday.split("/");
    var born = new Date(bday[2], bday[0], bday[1] * 1 - 1);
    var age = Math.floor((now.getTime() - born.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
   
      
    if (lnameValue != "") 
	  {
			if (lname.value.match(letters)){
			setSuccessFor(lname);			
		}
			else{
			setErrorFor(lname, 'Alphabet Characters only');	
	  }
	  }
	else {
			setErrorFor(lname, 'Last Name cannot be blank');
		}
	
    if (fnameValue != "") 
	  {
			if (fname.value.match(letters)){
			setSuccessFor(fname);			
		}
			else{
			setErrorFor(fname, 'Alphabet Characters only');	
	  }
	  }
	else {
			setErrorFor(fname, 'First Name cannot be blank');
		}	
		
	if (MIValue != "") 
	  {
			if (MI.value.match(letters)){
			setSuccessFor(MI);			
		}
			else{
			setErrorFor(MI, 'Alphabet Characters only');	
	  }
	  }
	else {
			setSuccessFor(MI);
		}

    if (studnumValue != "") 
	  {
	  if(studnum.value.match(numbers)){
			setSuccessFor(studnum);			
		}
			else{
			setErrorFor(studnum, 'Numerical Characters only');	
	  }
	  }
	else {
			setErrorFor(studnum, 'Student Number cannot be blank');
		}

    if (mobnumValue != "") 
	  {
	  if(mobnum.value.match(numbers)){
			setSuccessFor(mobnum);			
		}
			else{
			setErrorFor(mobnum, 'Numerical Characters only');	
	  }
	  }
	else {
			setErrorFor(mobnum, 'Mobile Number cannot be blank');
		}
	  return false;
      }
	  
	if (bdayValue != "") 
	  {
	  if (age>18){
		  setSuccessFor(bday);	
        setErrorFor(bday,'You need to be 18 years of age and older');
	}
	else{
		
return true;
}
	  }
	else {
			setErrorFor(mobnum, 'Mobile Number cannot be blank');
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