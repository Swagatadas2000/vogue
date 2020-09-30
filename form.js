function validate() {
      
    if( document.myForm.name.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.name.focus() ;
       return false;
    }
    if( document.myForm.email.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }
    
    if( document.myForm.gender.value == "" ) {
       alert( "Please provide your gender" );
       return false;
    }
    return( true );
 }
 function myFunction() {
   window.location.href = "fashion.html";
 }