// Your code goes here:
function renderPerson(name,dob,eyes,age,gender) {

   var string = `${name} is a ${age} years old ${gender} born in ${dob} with ${eyes} eyes`
   return string;
}


  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));