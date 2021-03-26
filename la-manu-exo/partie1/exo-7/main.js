function myfunc()
{
    var pointure=document.getElementById('shoeSize').value;
    var birthday=document.getElementById('yearOfBirth').value;
    pointure= (pointure*2+5)*50;
    var resulat= pointure-birthday + 1766 ;
    alert('le résulat est :' + resulat)
}