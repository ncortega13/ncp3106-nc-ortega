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
	var bdayValue = document.getElementById("bday").value;
	var emailValue = document.getElementById("email").value;	 
	var userValue = document.getElementById("user").value;	 
	var passValue = document.getElementById("pass").value;
	var conpassValue = document.getElementById("conpass").value;
	var cbValue = document.getElementById("cb").value;

	
	var letters = /^[A-Za-z]+$/;
	var numbers = /^[0-9]+$/;
	var bod = bdayValue.replace(/-/gi,"");;  
    var alphanum = /^([a-zA-Z@.]+)$/;  
	var uname = /^([a-zA-Z-_]+)$/;
	var pass1 = /^([a-zA-Z0-9]+)$/;	
	
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
	  
	if (bdayValue != "") 
	  {
	  if (bod < "2002107"){
		  setSuccessFor(bday);	
		}
			else{
			setErrorFor(bday,'You need to be 18 years of age and older');
			}
	}
	  
	else {
			setErrorFor(bday, 'Birthday cannot be blank');
		}
		
	if (emailValue != "") 
	  {
	  if(emailValue.match(alphanum)){
		  if (/@ue.edu.ph\s*$/.test(emailValue)){
				setSuccessFor(email);
		}
		else{
			setErrorFor(email, 'Incorrect Email Domain');
		}
	  }
		else{
		setErrorFor(email,'Incorrect Email Format');
			}
		}
	  
	else {
			setErrorFor(email, 'Email cannot be blank');
		}
		
    if (userValue != "") 
	  {
	  if(user.value.match(uname)){
			setSuccessFor(user);			
		}
			else{
			setErrorFor(user, 'Incorrect Format');	
	  }
	  }
	else {
			setErrorFor(user, 'Username cannot be blank');
		}
	
    if (passValue != "") 
	  {
	  if(pass.value.match(pass1)){
			setSuccessFor(pass);			
		}
			else{
			setErrorFor(pass, 'Incorrect Format');	
	  }
	  }
	else {
			setErrorFor(pass, 'Password cannot be blank');
		}	

    if (conpassValue != "") 
	  {
	  if(pass.value.match(pass1)){
			setSuccessFor(conpass);			
		}
			else{
			setErrorFor(conpass, 'Incorrect Format');	
	  }
	  }
	else {
			setErrorFor(conpass, 'Password cannot be blank');
		}

	if (document.getElementById('cb').checked == true){
		setSuccessFor(cb);
	}
	else{
		setErrorFor(cb, 'Accept the Terms & Condition');
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
