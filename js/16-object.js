/*
OBJECT  {}
    {
        key: value,
        key: value
    }

*/

/*
Mokiniai (array): 
    -mokinys (object)
        -vardas (string), 
        -pazymys (array),
        -kontaktinis asmuo (object) 
            --vardas (string), 
            --telefono nr. (number)
*/

const students = [
    {
        name: 'Petras',
        marks: [10, 6],
        contact: {
            name: 'P.P',
            phone: 111
        }
    },
    {
        name: 'Maryte',
        marks: [10, 7],
        contact: {
            name: 'M.M',
            phone: 222
        }
    },
    {
        name: 'Jonas',
        marks: [10, 8],
        contact: {
            name: 'J.J',
            phone: 333
        }
    },
    {
        name: 'Ona',
        marks: [10, 9],
        contact: {
            name: 'O.O',
            phone: 444
        }
    },

];

const studentIndex = 3;
const student = students[studentIndex];
// const name = student['name'];
const name = student.name;

// const marks = student['marks'];
const marks = student.marks;

// const contact = student['contact'];
const contact = student.contact;

// const contactName = contact['name']
// const contactName = contact.name;
const contactName = student.contact.name;


console.log(contactName);