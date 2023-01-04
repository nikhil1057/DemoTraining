function sendEmail(){
    console.log("Email sent");
}

var arr = [10,20,30];

const obj = {
    empid: 1001,
    eName: "Nikhil",
    works: (tasks) =>  {
                            for (let index = 0; index < tasks.length; index++) {
                            console.log(tasks[index]);
                            sendEmail();
                            
                            }    
                        },
    projects : ['Underwriting Pro', 'Illustrations'],
    accolades: ['Best Dancer', {y2021: ['Best Developer','Spot Award']}]
};

console.log(arr[1]);
console.log(obj.eName);
obj.works([
    'coding','testing'
]);
console.log(obj.projects[1]);
console.log(obj.accolades[1].y2021[1]);

var Amina = Object.create(obj);
Amina.eName = 'Amina'
Amina.empid = 1002;
Amina.works(['ABCD']);
Object.freeze(Amina);
Amina.projects = ['Illustrations'];     //will not reflect as object is frozen.
Object.assign()
Amina.empid = 2002;

console.log(Amina);

var Rahul = Object.create(obj);
Rahul.eName = 'Rahul';
Rahul.empid = 1003;
Rahul.works(['ABCDE']);
Object.seal(Rahul);
Rahul.empid = 2002;                     //only edits are allowed as object is sealed.
Rahul.projects = ['Illustrations'];

console.log(Rahul);