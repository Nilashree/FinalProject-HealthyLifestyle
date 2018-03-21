
<!DOCTYPE html>
<html>
<head>
	<meta name="google-site-verification" content="-kynQmNCcwu3Yxr59D8ATILSOTvBTCgm0oPMJ13p3IY" />
	<title>Contact Form</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="960.css">
	<link rel="stylesheet" href="style.css">
	<link rel="shortcut icon" href="logo.png" type="image/png">
<script type="text/javascript" src="http://gc.kis.v2.scr.kaspersky-labs.com/4E457BFA-82EC-B249-A82A-C266C3F9CFB6/main.js" charset="UTF-8"></script><script>
function validateFname() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("Please type your first name");
      	document.myForm.fname.focus() ;
		document.getElementById("firstname").style.border = "thick solid pink";
		return false;
    	}
    else {if (typeof(Storage) !== "undefined") {
		localStorage.setItem("firstname", myFrom.fname.value);
		}
	}
}
function validateLname() {
	 var x = document.forms["myForm"]["lname"].value;
    if (x == null || x == "") {
        alert("Please type your last name");
      	document.myForm.lname.focus() ;
      	document.getElementById("lastname").style.border = "thick solid pink";
	 	return false;
	}
}
function validateEmail() {
	var emailID = document.myForm.email.value;
      	atpos = emailID.indexOf("@");
      	dotpos = emailID.lastIndexOf(".");
         
      	if (atpos < 1 || ( dotpos - atpos < 2 )) 
      	{
        		alert("Please type your correct email")
            document.myForm.email.focus() ;
            document.getElementById("email").style.border = "thick solid pink";
            return false;
         }
}
function validatePhone() {
	if( document.myForm.phone.value == "" ||
    	isNaN( document.myForm.phone.value ) ||
    	document.myForm.phone.value.length != 10 )
      {
        alert( "Please type your full 10 digit number" );
        document.myForm.phone.focus() ;
        document.getElementById("phone").style.border = "thick solid pink";
        
        return false;
      }
}
function validateAddress() {
	var x = document.forms["myForm"]["address"].value;
    if (x == null || x == "" ||
    	document.myForm.address.value.length <= 20)
    {
        alert("Please type your full address");
      	document.myForm.address.focus() ;
		document.getElementById("address").style.border = "thick solid pink";
        return false;
    }
}
function validateMessage() {
	var x = document.forms["myForm"]["message"].value;
    if (x == null || x == "" ||
    	document.myForm.address.value.length <= 5)
    {
        alert("Please type your message. Message has to be at least 5 characters in length");
      	document.myForm.message.focus() ;
        document.getElementById("message").style.border = "thick solid pink";
        return false;
    }
}
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("Please type your first name");
      	document.myForm.fname.focus() ;
      	document.getElementById("firstname").style.border = "thick solid pink";
      	 return false;
    	}
    var x = document.forms["myForm"]["lname"].value;
    if (x == null || x == "") {
        alert("Please type your last name");
      	document.myForm.lname.focus() ;
      	document.getElementById("lastname").style.border = "thick solid pink";
        return false;
    }
    var emailID = document.myForm.email.value;
      	atpos = emailID.indexOf("@");
      	dotpos = emailID.lastIndexOf(".");
         
      	if (atpos < 1 || ( dotpos - atpos < 2 )) 
      	{
        		alert("Please type your correct email")
            document.myForm.email.focus() ;
            document.getElementById("email").style.border = "thick solid pink";
            return false;
         }
    if( document.myForm.phone.value == "" ||
    	isNaN( document.myForm.phone.value ) ||
    	document.myForm.phone.value.length != 10 )
      {
        alert( "Please type your full 10 digit number" );
        document.myForm.phone.focus() ;
        document.getElementById("phone").style.border = "thick solid pink";
        return false;
      }
    var x = document.forms["myForm"]["address"].value;
    if (x == null || x == "" ||
    	document.myForm.address.value.length <= 20)
    {
        alert("Please type your full address");
      	document.myForm.address.focus() ;
      	document.getElementById("address").style.border = "thick solid pink";
        return false;
    }
    var x = document.forms["myForm"]["message"].value;
    if (x == null || x == "" ||
    	document.myForm.message.value.length <= 5)
    {
        alert("Please type your message. Message has to be at least 5 characters in length");
      	document.myForm.message.focus() ;
      	document.getElementById("message").style.border = "thick solid pink";
        return false;
    }
   	alert("Thank you!");
    return true;
}
</script>

</head>

<body>
	<div class="container_12">
	<div class="grid_12" id="section"> <!--Start of the div called section that will create the middle lightyellow page-->
	<div class="grid_12" id="header"> <!--Start of the div for header/title of the page-->
	<img src="hastmedap.png" alt="holding hands" style="width:20%;height:21%;"> <strong>Gujarati Weddings</strong> <img src="hastmedap.png" alt="holding hands" style="width:20%;height:21%;">
	</div> <!--closing the header div-->
	
	<div id="grid_2"> <!--Start of the div for navigation bar-->
	<ul>
  		<li><a href="http://ait616.com/npatel22/final_project_home.html">Home</a></li>
  		<li><a href="http://ait616.com/npatel22/final_project_ceremonies.html">Ceremonies</a></li>
  		<li><a href="http://ait616.com/npatel22/final_project_attire.html">Attire</a></li>
  		<li><a href="http://ait616.com/npatel22/final_project_food.html">Food</a></li>
		<li><a href="http://ait616.com/npatel22/final_project_mehndi.html">Mehndi</a></li>
		<li><a href="http://ait616.com/npatel22/final_project_game.html">Game</a></li>
  		<li><a href="http://ait616.com/npatel22/final_project_about_us.html">About Us</a></li>
  		<li><a href="http://ait616.com/npatel22/final_project_FAQ.html">FAQ</a></li>
  		<li><a href="http://ait616.com/npatel22/final_project_form.html">Contact</a></li>
  		<li><a href="http://ait616.com/npatel22/final_project_future.html">Future</a></li>
  		<li><a href="http://ait616.com/npatel22/final_project_links.html">Links</a></li>
  		<li><a href="http://ait616.com/npatel22/final_project_policy.html">Policy</a></li>
	</ul>
	</div> <!--Closing the navigation div-->	
	
	<div id="content"> <!--Start of the div for the content that will adujust to the navigation bar. this represents class="grid_6" here-->
	<p>&nbsp; </p>
	<form name="myForm" onsubmit="return validateForm();">
  		<fieldset style="text-align:left; width: 430px; float: left">
  			<legend style="text-align:center;">Contact Information</legend>
  			<br>
    		<label for="firstname" style="display:block">First Name:</label>
    		<input type="text" name="fname" id="firstname" size="52" onchange="return validateFname()">
    		<br>
  			<br>
  			<label for="lastname" style="display:block">Last Name:</label>
    		<input type="text" name="lname" id="lastname" size="52" onchange="return validateLname()">
    		<br>
  			<br>
    		<label for="email" style="display:block">E-mail:</label>
    		<input type="email" name="email" id="email" size="52" onchange="return validateEmail()">
    		<br>
  			<br>
    		<label for="phone" style="display:block">Phone:</label>
    		<input type="tel" name="phone" id="phone" size="52" onchange="return validatePhone()">
    		<br>
 			<br>
    		<label style="display:block">Address:</label>
    		<textarea name="address" id="address" rows="5" cols="50" onchange="return validateAddress()"></textarea>
    		<br>
  			<br>
  			<label style="display:block">Message:</label>
    		<textarea name="message" id="message" rows="10" cols="50" onchange="return validateMessage()"></textarea>
    		<br>
    		<br>
    		<input type="radio" name="gender" value="male"> Male
    		&nbsp; &nbsp;
    		<input type="radio" name="gender" value="female"> Female
    		<br>
    		<br>
    		<input type="checkbox" name="adult" value="adult"> I'm 18 or older
    		&nbsp; &nbsp;
			<input type="checkbox" name="teenager" value="teenager"> I'm 17 or younger
    		<br>
  			<br>
  			<br>
  			&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
  			<input type="reset" value="RESET">
  			&nbsp; &nbsp;
  			<input type="submit" onclick="storeName();" value="SEND">
  			<br>
  		</fieldset>
	</form>
	</div>
	<script type= "text/javascript">
	function storeName() {
		var fn = document.getElementById("firstname");
		// Check browser support
		if (typeof(Storage) != "undefined") {
		localStorage.setItem("firstname", fn.value);
		}
		else { }
		}
	</script>
	
	<div id="grid_4"> <!--Start of the div for the content that will adujust to the navigation bar-->
	<form>
  		<fieldset style="text-align:left; width: 270px; float: right">
  			<legend style="text-align:center">Contact Information</legend>
  			<br>
    		<label style="display:block">Call us @ 1-309-98-GUJJU</label>
    		<br>
    		<label style="display:block">Email us @ neilpatel@gujjuwedding.com</label>
    	</fieldset>
    </form>
	</div>
	
	&nbsp;
	<div id="grid_12" style="padding: 43em 0 0 0">
	<h3><mark><small>The background picture is copied from https://pixabay.com/static/uploads/photo/2015/04/30/13/07/texture-746879_960_720.jpg</small></mark></h3>
	</div>
	
	<br>
	
	<div id="footer"> <!--Start of the footer div. represents class="grid__12" here.-->
	<div>
	<br>
	<iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Ftowsonuniversity%2F&width=50&action=like&show_faces=false&share=false&height=46&appId " width="50" height="20" style="border:none;overflow:hidden" ></iframe>
	<a href="https://twitter.com/share" class="twitter-share-button" data-url="https://twitter.com/TowsonU" data-text="Hey guys! Check out Towson University!">Tweet</a>
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
	<br>
	<a data-pin-do="buttonFollow" href="https://www.pinterest.com/towsonu/" >Pin&nbsp;it</a>
	<script async defer src="//assets.pinterest.com/js/pinit.js"></script>	
	</div>

	<strong><i>Neil Patel</i></strong><br>
	Call us @ 1-309-98-GUJJU<br>
	Email us @ <b><a href="mailto:neilpatel@gujjuwedding.com">neilpatel@gujjuwedding.com</a></b><br> 
	
	100 10th St<br>
	San Francisco, CA 94101<br>

	Copyright &copy; 2016 by Gujju Weddings
	<br>
	<br>
	</div> <!--Closing the footer div-->
	</div> <!--Closing the section div-->
	</div> <!--Closing the container div-->

</body>
</html>