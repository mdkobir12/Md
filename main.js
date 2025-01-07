// function calculate() {
//   var name = document.getElementById("name").value;
//   var mobile = document.getElementById("mobile_number").value;
//   var email = document.getElementById("email").value;
//   var address = document.getElementById("address").value;
//   var loanAmount = parseInt(document.getElementById("loanAmount").value);
//   var month = parseInt(document.getElementById("month").value);

//   document.getElementById("show-name").innerHTML = name;
//   document.getElementById("show-number").innerHTML = mobile;
//   document.getElementById("show-email").innerHTML = email;
//   document.getElementById("show-address").innerHTML = address;


  
//   if (month == 6) {
//     let  totalInterest = loanAmount * (2 / 100);
//     let  payable = loanAmount + totalInterest;
//     let  totalinterest = payable / month;
//     document.getElementById("show-amount").innerHTML = monts;
//     } else if (month == 12) {
//     let  totalInterest = loanAmount * (5 / 100);
//     let  payable = loanAmount + totalInterest;
//     let  totalinterest = payable / month;
//     document.getElementById("show-amount").innerHTML = month;
//     } else if (month == 24) {
//     let  totalInterest = loanAmount * (10 / 100);
//     let payable = loanAmount + totalInterest;
//     let totalinterest = payable / month;
//     document.getElementById("show-amount").innerHTML = month;
//     }
// }





function calculate() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile_number").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var loanAmount = parseInt(document.getElementById("loanAmount").value);
    var month = parseInt(document.getElementById("month").value);
  
  
    document.getElementById("show-name").innerHTML = name;
    document.getElementById("show-number").innerHTML = mobile;
    document.getElementById("show-email").innerHTML = email;
    document.getElementById("show-address").innerHTML = address;
  
    
    if (month == 6) {
      let totalInterest = loanAmount * (2 / 100);  
      let payable = loanAmount + totalInterest;    
      let totalpayment = payable / month;          
      document.getElementById("show-amount").innerHTML = totalpayment.toFixed(2); 
    } else if (month == 12) {
      let totalInterest = loanAmount * (5 / 100);  
      let payable = loanAmount + totalInterest;    
      let totalpayment = payable / month;         
      document.getElementById("show-amount").innerHTML = totalpayment.toFixed(2); 
    } else if (month == 24) {
      let totalInterest = loanAmount * (10 / 100); 
      let payable = loanAmount + totalInterest;    
      let totalpayment = payable / month;          
      document.getElementById("show-amount").innerHTML = totalpayment.toFixed(2); 
    } else {
      document.getElementById("show-amount").innerHTML = "";
    }
  }
  
  






