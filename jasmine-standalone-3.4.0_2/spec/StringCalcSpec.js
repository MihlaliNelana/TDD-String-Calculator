describe("String Calculator",  function(){
  beforeEach(function() {
    calculator = new StringCalculator();
  });

  it("should be able to return sum of two or more numbers that are split by a comma", function(){
    expect(calculator.add("1,2,1")).toEqual(4);
  });

  it("should allow the Add method to handle an unknown amount of numbers", function(){
    // creates a randomized array
    randomArray = (length, max) => [new Array(length)]
    .map(() => Math.round(Math.random() * max));
    //randomly create a random number form 1 - 100
    randomNum = Math.floor((Math.random() * 100) + 1);
    respose = randomArray(randomNum,randomNum);
    // sum of array
    sum = respose.reduce((i, j) => i+j, 0);
    // convert the array to a string
    arg = respose.join();
    //expect arguments passed toEqual sum
    expect(calculator.add(arg)).toEqual(sum);
  });

  it("should allow \n in between the input number", function(){
    expect(calculator.add("1\n2\n3")).toEqual(6);
  });

  it("should support different delimeters", () => {
    expect(calculator.add("//;\n2;2")).toEqual(4);
  });

  it("should deny negative numbers", function(){
    expect( function(){ calculator.add("-1,2,3");}).toThrow(new Error("Negative numbers are not allowed"));
  });

  it("should return 0 if input is an empty string", function () {
      expect(calculator.add("")).toBe(0);
  });
  
  it("should return the number when a single number is passed", function(){
    expect(calculator.add('1')).toEqual(1);
  });

  it("should return 2 if input is \"1\n0,1\"", function () {
      expect(calculator.add("1\n0,1")).toBe(2);
    });

  it("should return 6 if input is \"1,1,1,1,1,1\"", function () {
      expect(calculator.add("1,1,1,1,1,1")).toBe(6);
    });

  });