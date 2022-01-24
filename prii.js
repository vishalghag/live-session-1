// Program to find out prime numbers in a given array

function pri(num)
{
    num = [12]

for(var i = 2;i<num;i++)
{
    if(num%i===0)
    {
        return false;
    }
}
    return true;
}

console.log(pri()); 