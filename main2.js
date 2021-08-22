var employeeSalaries ={}
employeeSalaries.stuff1=2000
employeeSalaries.stuff2=4000
employeeSalaries.stuff3=5000
employeeSalaries.stuff4=6000
employeeSalaries.stuff5=7000
let summ = 0;
let masStuff=[employeeSalaries.stuff1,employeeSalaries.stuff2,employeeSalaries.stuff3,employeeSalaries.stuff4]
for(let i = 0;i<masStuff.length;i++){
    summ +=masStuff[i]
}
console.log(summ);