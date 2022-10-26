import bugModel from '../models/bugModel';

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        id: 144,
        name: "Wont load",
        details:"crashes after 3 seconds",
        steps: "open appplication and it will crash",
        version:"V2.0",
        assigned: "Quinton Spivey",
        creator: "John Doe",
        priority:1,
        time: "23:47",

    }))

    data.push(new bugModel({
        id: 167,
        name: " load",
        details:"crashes after 3 seconds",
        steps: "open appplication and it will crash",
        version:"V2.0",
        assigned: "Quinton Spivey",
        creator: "John Doe",
        priority:1,
        time: "24:33",

    }))

    let sorted = data.sort((a,b)=>{return a.priority-b.priority})
    return sorted

}