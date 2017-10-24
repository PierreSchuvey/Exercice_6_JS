function calculer()
{
  var basicnumber = document.getElementById('premier_nombre').value;
  var number1 = Math.floor(basicnumber);
  var number2 = document.getElementById('deuxieme_nombre').value;
  var result= number1 % number2;

  if(number2!=0)
  {
    alert(result);
  }
  else{
    alert('Pas de division par 0 !');
  }
}
