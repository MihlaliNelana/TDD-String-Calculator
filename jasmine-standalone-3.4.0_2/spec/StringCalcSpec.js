describe("String Calculator",  function(){
  beforeEach(function() {
    calculator = new StringCalculator();
  });

  it("should be able to return sum of two numbers that are split by a comma", function(){
    expect(calculator.add("1,2")).toEqual(3);
  });

  it("should be able to handle unknown amount of numbers", function(){
    // creates a random array
    randomArray = (length, max) => [new Array(length)]
    .map(() => Math.round(Math.random() * max));
    //randomly creates a random number between 1 and 100
    randomNum = Math.floor((Math.random() * 100) + 1);
    res = randomArray(randomNum,randomNum);
    // sum of array
    sum = res.reduce((pv, cv) => pv+cv, 0);
    // convert the array to a string
    arg = res.join();
    //expect arfuments passed to be sum
    expect(calculator.add(arg)).toEqual(sum);
  });

  it("should allow \n in between the input number string", function(){
    expect(calculator.add("1\n2,3")).toEqual(6);
  });

  xit("should throw an error if number is '1,\n'", function(){
    expect(calculator.add("1,\n")).toThrow(new Error("not allowes"));
  })

  it("should return 0 if input is an empty string", function () {
      expect(calculator.add("")).toBe(0);
  });
  
  xit("Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2", function(){
    expect(calculator.add("1001 + 2")).toBe(2);
  
  it("should return the number when a single number is passed", function(){
    expect(calculator.add('1')).toEqual(1);
  });

  it("should return 2 if input is \"1\\n0,1\"", function () {
      expect(calculator.add("1\n0,1")).toBe(2);
    });

  it("should deny negative numbers", function(){
    expect( function(){ calculator.add("-1,2,3");}).toThrow(new Error("Negative numbers are not allowed"));
  });

  it("should return 6 if input is \"1,1,1,1,1,1\"", function () {
      expect(calculator.add("1,1,1,1,1,1")).toBe(11);
    });
  })
});