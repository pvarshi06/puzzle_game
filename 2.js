
function check()
{
    var a=document.getElementById("field").value;
   if(a==="CANDLE")
   {
    document.getElementById('success-page').style.display = 'block';
    document.getElementById('error-message').innerHTML = '';

   }
   else
   {
    document.getElementById('error-message').innerHTML = '<span style="text-align: center; position: relative; top:100px; left:550px;">Incorrect answer. Please try again.</span>';
    document.getElementById('success-page').style.display = 'none';

   }
}
// function clue()
// {
//   location.href("5.html") 
// }