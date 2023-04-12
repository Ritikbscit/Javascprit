prompt=require('prompt-sync')()
a=parseInt(prompt('enter the number:-'))
let count=0
while(a>1)
{
 a=(a/10)
// a--//rem--
 count++ 
}
console.log(count)