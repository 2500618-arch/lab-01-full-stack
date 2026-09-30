class student{
    constructor(name,marks){
        this.marks = marks;
        this.name = name;
    }
    get_grade(marks){
        if(marks >= 80){
            console.log("A");
        }
        else if(marks >= 70){
            console.log("B");
        }
        else if(marks >= 60){
            console.log("C");
        }
        else if(marks >= 50){
            console.log("D");
        }
        else{
            console.log("F");
        }
    }

}

let s = [
    new student("Ali",90),
    new student("asim",32),
    new student("Ahb",70),
    new student("wasif",62),
    new student("kashif",80),
    new student("nasir",32)

];

let passing_students = s.filter((student) => student.marks>=50);

console.log("pass students: ", passing_students);

let students_names = s.map((student) => student.name);

console.log("students name: ",students_names);

let total_students = s.length;

let total_marks = s.reduce((sum,student) => sum + student.marks,0);

let average = total_marks/s.length;

console.log("total students: ",total_students
    ,"total marks: ",total_marks
,"average: ",average);

let sort = s.sort((a,b) => b.marks-a.marks);

console.log("sorted marks: ");

for(let i=0;i<6;i++){
    console.log(s[i].marks);
}

console.log("sorted array with destructuring: ");

for(let i=0;i<s.length;i++){
    console.log(`name: ${s[i].name}, marks: ${s[i].marks}, grade: ${s[i].get_grade(s[i].marks)}`);
}