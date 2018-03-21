
function validatefname()
{
alert();
var userfname=document.getElementById('fname');
if (userfname == null || userfname == "") {
        alert("Please type your first name");
      	document.contactFrom.fname.focus() ;
		document.getElementById("fname").style.border = "thick solid pink";
		return false;
    	}
    else {if (typeof(Storage) !== "undefined") {
		localStorage.setItem("firstname", contactFrom.fname.value);
		}
	}
}

