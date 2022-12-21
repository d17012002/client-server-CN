console.log("Client Side");

const btn = document.querySelector("#getData");
btn.addEventListener('click', fetchFunc);

async function fetchFunc(){
    console.log("Sending Request...");
    console.log("Server Side");
    await fetch('http://localhost:3000')
    .then((res)=>res.json())
    .then((data) => console.log(data));

    console.log("Data Received!");
}