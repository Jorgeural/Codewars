/*
Description:

Write simple .camelcase method (camel_case function in PHP) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord*/

String.prototype.camelCase=function(){
console.log(this);
   return this.length == 0 ? "" :this.trim()
                                 .split(" ")
                                   .map(a => a[0].toUpperCase()+a.substring(1,a.length))
                                    .join("");
}