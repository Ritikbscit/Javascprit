let a=1234
mul=1
for(;a>0;)
{
    rem=a%10
    mul=mul*rem
    a=parseInt(a/10)
}
console.log(mul)