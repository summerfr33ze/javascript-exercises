const removeFromArray = function(arr, ...arrItems) {
for (let i=0; i < arrItems.length; i++){   
for (let i = 0; i < arr.length; i++)
{
    
    if (arrItems.includes(arr[i]) === true )       
        {
            arr.splice(i, 1)
        }

               
    

        else {
            continue
        }




        
}
}
return arr
}


    


//KEEP ITERATING UNTIL ALL STRINGS REMOVED
// Do not edit below this line
module.exports = removeFromArray;
