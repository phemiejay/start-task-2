$ (document).ready(function(){
    $('.submit').click(function (event){
        event.preventdefault()
        console.log('clicked button')

var Name = $('.name').val ()
        var email = $('.email').val()
        var Title = $('.Title').val()
        var Message = $('.Message').val()
var statusElm = $('.status')
statusElm.empty()

if (email.length >5 && email.includes ('@') && email.includes('.')){
    statusElm.append('<div>email is valid</div>')
} else {
    event.preventdefault()
    statusElm.append('<div>email is not valid</div>');
}

if (Name.length >= 4) {
    statusElm.append('<div> Name is valid</div>') 
} else{
    event.preventdefault()
   statusElm.append('<div> Name is not valid</div>');
}
if (Message.length >= 20){
    statusElm.append('<div>message is ok</div>')
} else {
    event.preventdefault()
    statusElm.append('<div>message is too long</div>');
}
    })
})
