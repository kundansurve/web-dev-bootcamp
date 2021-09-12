const inputfields=document.querySelectorAll("input");
const btn=document.querySelectorAll("button");

const userdata=[];

btn[1].onclick=()=>{

    let name=inputfields[0].value;
    let email=inputfields[1].value;
    let phone=inputfields[2].value;
    userdata.push({name, email, phone});
    console.log(userdata);
}