const rapid = (str) => {
    var array = str.split("");
    var string = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i]!="a"&&array[i]!="e"&&array[i]!="i"&&array[i]!="o"&&array[i]!="u") {
            array[i] = array[i].toUpperCase();
            string= string + array[i];
        }       
        
    }
    return string;
}

   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));