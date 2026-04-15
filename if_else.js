let age=22;

//********************if statement:  ********************
if(age>=18 && age<60){
    console.log("Age: " + age + ", => you are an adult");
    document.write("</br>Age: " + age + ", => you are an adult");
}

//********************if-else statement:  ********************
if(age>=18){
    console.log("Age: " + age + ", => you are eligible to vote");
    document.write("</br></br>Age: " + age + ", => you are eligible to vote");
}
else{
    console.log("Age: " + age + ", => you are not eligible to vote");
    document.write("</br></br>Age: " + age + ", => you are not eligible to vote");
}  

//*********if-else-if-else statement: **********
let marks=85;

if(marks>=90){
    console.log("Marks:" + marks + ", => Grade A");
    document.write("</br></br>Marks:" + marks + ", => Grade A");
}
else if(marks>=80){
    console.log("Marks:" + marks + ", => Grade B");
    document.write("</br></br>Marks:" + marks + ", => Grade B");
}
else if(marks>=70){
    console.log("Marks:" + marks + ", => Grade C");
    document.write("</br></br>Marks:" + marks + ", => Grade C");
}   
else if(marks>=60){
    console.log("Marks:" + marks + ", => Grade D"); 
    document.write("</br></br>Marks:" + marks + ", => Grade D");
}