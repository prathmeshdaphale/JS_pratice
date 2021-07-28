class Human{
    constructor (name,age) {
      this.name = name;
      
      this.age =age;
    }
  }
  
  
  class Man extends Human{
    constructor (name) {
      
      super (name)
      this.name = name;
    }
  }
  
  
  function check() {
    var obj= new Man("Tommy Tan");
    console.log(obj.name);
    console.log(obj instanceof Human);
  }
  check()
  