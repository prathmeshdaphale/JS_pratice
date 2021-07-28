const myObject = {

    collection: [{name: "Kelly"}, {name:"Anna"}]
  }
    
    let{collection:[{name:fname},{name:lname}]} = myObject;
    
    console.log(lname);