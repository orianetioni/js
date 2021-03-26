function myfunction(){
    var firstNumber=document.getElementById('firstNumber').value;
    var secondNumber=document.getElementById('secondNumber').value;
    var result = parseInt(firstNumber) * secondNumber;
    if (isNaN(firstNumber) || isNaN(secondNumber))

    {
        alert("Vous n'avez pas entré des chiffres");
      }
        else {
          alert("Le résultat est : " + result);
        }
}
