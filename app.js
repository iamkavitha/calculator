function dis(val) 
         { 
             document.getElementById("result").value+=val 
         } 
           
          
         function solve() 
         { 
              x = document.getElementById("result").value 
              y = eval(x) //eval() evaluates the expression(if the argument is expression)
             document.getElementById("result").value = y 
         } 
           
          
         function clr() 
         { 
             document.getElementById("result").value = "" 
         } 