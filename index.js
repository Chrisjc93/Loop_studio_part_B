//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.

//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.

//For now, make sure the two strings contain the same number of characters!

let  str1 = 'Rutabagas';
let  str2 = 'Chemistry';
let str3 = ""
for (let i = 0; i < str1.length; i++){
  str3 += `${str1[i]}${str2[i]}`.toLowerCase();
}

console.log(str3);

let str4 = []; // I wrote this example to use push instead of the string literal
for(let i = 0; i < str1.length; i++){
  str4.push(str1[i],str2[i]);
}
console.log(str4.join("").toUpperCase());
