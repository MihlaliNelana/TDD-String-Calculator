function StringCalculator(){
    StringCalculator.prototype.add = function(string_numbers) {
        this.number = string_numbers;
      
          // deny negative number
          if (this.number.includes('-')) 
          {
              throw Error('Negative numbers are not allowed');
          }
          
          // replace comma
          numbers = this.number.replace(/(\;|\]|\%|\*|\/|\[|\r\n|\n|\r)/gm, ",");
          if (numbers == '') {  
              return 0;
          } else if(numbers.length === 1) {   
              return (parseInt(numbers));  
          } else 
              {
                  res = numbers.split(',');
                  var total = 0;
                  var arrayLength = res.length; 
                  
                  for (var i = 0; i < res.length; i++) {  
                      total = total + parseInt(res[i]);  
                  }
              return total;   
          }   
 }
};