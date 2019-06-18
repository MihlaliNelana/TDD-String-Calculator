function StringCalculator(){
    StringCalculator.prototype.add = function(string_numbers) {
        this.number = string_numbers;
      
          // deny negative number
          if (this.number.includes('-')) 
          {
              throw Error('Negative numbers are not allowed');
          }
          
          // replace comma
          numbers = this.number.replace(/(\;|\]|\%|\*|\/|\[|\r\n|\n|\r)/gm, ",");   //support different delimiter
          if (numbers == ''){      //return 0 if string is emoty
              return 0;
          } 
          else if(numbers.length === 1) {   
            return (parseInt(numbers));  
          } 
          else 
            {
                response = numbers.split(',');    //split commas
                var total = 0;
                var arrayLength = response.length; 
            //console.log(response);        
          
            for(var j = 0; j < arrayLength; j++){
                if(response[j] == ""){
                    response.splice(j,1);
                    j--
                }    
            }
           //console.log(response);
          
           for (var i = 0; i < response.length; i++) {  
                  total = total + parseInt(response[i]);
                }
              return total;   
          }   
 }
};

// let calculator = new StringCalculator();
// calculator.add("//;\n2;2");