let a=124
sum=0
for(;a>0;)
{
    rem=a%10
    sum=sum+rem
    a=parseInt(a/10)
    
}
console.log(sum)