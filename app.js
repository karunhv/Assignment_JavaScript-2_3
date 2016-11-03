var count = 0; //Variable initialization
var sum = 0;
//For Loop - initialization, Condition Check, Increment
for(count = 0; count <= 1000; count++)
{
  sum = sum + count;
}

console.log("(For Loop)Sum is :" + sum);
//While Loop
count = 0;
sum = 0;
//Condition Check and Loop
while(count<=1000)
{
  sum = sum + count;
  count++; //Increment
}
console.log("(While Loop)Sum is :" + sum);
