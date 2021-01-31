let str1 = prompt(`Enter String 1`);
let str2 = prompt(`Enter String 2`);
let newStr = "";
if (str1.length >= str2.length) {
    for (i=0; i<str2.length; i++) {
        newStr += str1[i] +str2[i];
        
    }
    for (let i = str2.length; i<str1.length; i++) {
        newStr +=str1[i];
    }
    console.log(newStr);
} else {
    for (i=0; i<str1.length; i++) {
        newStr += str1[i] +str2[i];
        
    }
    for (let i = str1.length; i<str2.length; i++) {
        newStr +=str2[i];
    }
    console.log(newStr);
}
