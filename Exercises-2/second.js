let age = 29

if (age < 6)
    console.log("Free")
else if(age >= 6 && age <= 17)
    console.log("Child Discount")
else if(age >= 18 && age <= 26)
    console.log("Student Discount")
else if(age >= 27 && age <= 66)
    console.log("Full Price")
else
    console.log("Senior Citizen Discount")