function isLeap(year){
    if (year % 4 == 0 ){
        if (year % 100 == 0){
            if (year % 400 == 0){
                alert(`The year ${year} is a leap year`)
            }
            else{
                alert(`The year ${year} is not a leap year`)
            }  
        }
        else{
            alert(`The year ${year} is a leap year`)
        }
        
    }
    else{
        alert(`The year ${year} is not a leap year`)
    }
   
}



var fullYear = parseInt(prompt("Enter year:"))
isLeap(fullYear)