function f1() 
{ var fname=document.getElementById('fname').value;
  var lname=document.getElementById('lname').value;
  var email=document.getElementById('email').value;
  var birthday=document.getElementById('birthday').value;
  
  
  localStorage.setItem("pfn", fname);
  localStorage.setItem("pln", lname);
  localStorage.setItem("pem", email);
  localStorage.setItem("pbd", birthday);
  
  document.writeln(localStorage.getItem("pfn"));
  document.writeln(localStorage.getItem("pln"));
  document.writeln(localStorage.getItem("pem"));
  document.writeln(localStorage.getItem("pbd"));
  



}

