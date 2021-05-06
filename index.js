function lTrim(str){
    return str.trimLeft();
}
function rTrim(str){
    return str.trimRight();
}
function trim(str){
    str = lTrim(str);
    str = rTrim(str);
    return str;
}
let _str = '  asef         ';
console.log(trim(_str));