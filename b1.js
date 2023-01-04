let h = 5;
let str ="";
for (let i = 0; i <= h; i++) {
    for (let k = 0; k < i; k++) {
        str +="*"; 
    }
    str +="\n"
}
console.log(str);
