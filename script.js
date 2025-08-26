function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// ------------------project--------------------
const projectData = [
  {
    name: "news website",
    img: "news.png",
    discription: "This is a bueatiful responsive resturent wibsite ",
    link: "https://ruhaid.github.io/ptmkhyber/",
  },
  {
    name:"landing page",
    img:"new project.png",
    discription:"this is portfolio website fully responsive",
    link:"https://ruhaid.github.io/new-portfolio/"
  }
];
let projectDiv = document.getElementById("project");
projectData.forEach((porject) => {
  let projectContainer = document.createElement("div");
  projectContainer.classList.add("project");
  projectContainer.innerHTML = `<img src="${porject.img}" alt="">
  <h1>${porject.name}</h1>
  <p>${porject.discription}</p>
  <a href="${porject.link}"><button>Porject veiw</button></a>
`;
  projectDiv.appendChild(projectContainer);
});
