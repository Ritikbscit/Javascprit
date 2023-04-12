prompt=require('prompt-sync')()
a=prompt('enter the number')
b=prompt('enter the exponet')
let rem=1 , i=1
while(i<=b)
{
    rem=rem*a
    i++
}
console.log(rem)