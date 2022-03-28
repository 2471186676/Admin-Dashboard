let pageNav = document.getElementsByClassName("pageNav")[0];
console.log(pageNav);

let option1 = ["Home", "Profile", "Message", "History", "Tasks", "community"];
let option2 = ["Setting", "Support", "Privacy"];

let createOption = (option) =>{
    for(let i = 0; i < option.length; i++){
        let child = document.createElement("button");
        child.className = "option"

        let img = document.createElement("img");
        img.src = "./img/circle.svg";
        img.alt = "img";
        child.appendChild(img);

        let text = document.createElement("p");
        text.innerText = option[i];
        child.appendChild(text);

        pageNav.appendChild(child);
    }
}

createOption(option1);
let separater = document.createElement("button");
separater.className="separater"
pageNav.appendChild(separater);
createOption(option2);