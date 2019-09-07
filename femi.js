function validateform() {
    var name = document.forms.name.value;
    var x = document.forms.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    var title = document.forms.title.value;
    var message = document.forms.message.value;


    if (name == null || name == "")
    {
        alert("Name is empty");
        return false;
    }
    else if(name.length < 4)
{
    alert ("Name has to have at least 4 characters");
    return false;
}

 if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.lenght) 
 {
     alert ("Email is not valid");
     return false;
 }

 if  (title == null || title == "")
{
    alert("Title field is empty");
    return false;
}

if (message == null || message == "")
{
    alert ("Message feild is empty");
    return false;
}
else if(message.length < 20)
{
    alert ("Message is invalid Please enter at least 20 characters");
    return false;
}



}