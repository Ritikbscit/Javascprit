let num=123
mul=1
while(num>0)
{
rem=num%10
mul=mul*rem
num=parseInt(num/10)
}
console.log(mul)
