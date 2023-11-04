const arrowFunction=(a,b)=>{
    return a*b
}
console.log(arrowFunction(3,2))
const student={
    name:'Max',
    age:16,
    Marks:80,
    greet() {
        console.log('I am '+this.name+' and I am '+this.age+' year old with '+this.Marks+' marks')
    }
    
    
}
student.greet();