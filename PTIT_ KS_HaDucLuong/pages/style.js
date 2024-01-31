
let section = document.querySelector('.section');
let sectionRight = section.querySelector('.section-right');
let sectionMid = section.querySelector('.section-mid');

let heroInfo = {
  name: "Hạ Đức Lương",
  job: "freelance Python developer",
  imgUrl: "https://picsum.photos/200/300",
};

sectionRight.innerHTML = `<img src="${heroInfo.imgUrl}" alt="${heroInfo.name}">`;

sectionMid.innerHTML = `
  <small style="font-weight: 200; font-size: 16px;">Hi, I'm ${heroInfo.name}</small>
  <h1>
    I'm ${heroInfo.job}
  </h1>
  <button class="download">Download CV   </button>
`;

let personalDetail = {
    name: "Minh Cường",
    dob: "06 June 2005",
    spokenLanguages: ["English", "France", "German"],
    nationality: "Vietnam",
    interest: ["Music", "Reading", "Journey"],
    techs: [
      {
        id: 1,
        imgUrl: "https://i.postimg.cc/cHdfNH2Z/android.png",
        techName: "Android",
        exp: 2,
      },
      {
        id: 2,
        imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
        techName: "Angular",
        exp: 1,
      },
      {
        id: 3,
        imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
        techName: "Bootstrap",
        exp: 3,
      },
      {
        id: 4,
        imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
        techName: "Vue",
        exp: 2,
      },
      {
        id: 5,
        imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
        techName: "React",
        exp: 2 / 3,
      },
      {
        id: 6,
        imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
        techName: "Mongodb",
        exp: 0.25,
      },
      {
        id: 7,
        imgUrl: "https://i.postimg.cc/RZzFYYjx/laravel.png",
        techName: "Laravel",
        exp: 1,
      },
      {
        id: 8,
        imgUrl: "https://i.postimg.cc/X7N3ybSJ/nodejs-icon.png",
        techName: "Node.js",
        exp: 5 / 6,
      },
    ],
  };
    localStorage.setItem("personalDetail",JSON.stringify(personalDetail.dob));
    let detail = JSON.parse(localStorage.getItem("personalDetail"));
    let mingKhon = document.querySelector('#m');
    mingKhon.innerHTML = detail;
   
    
  
  let projects = [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
      projectName: "Auto Drive Project",
      link: "https://abcd-example.com",
      tags: ["Angular", "React", "Jquery"],
    },
    {
      id: 2,
      imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
      projectName: "Ecommerce Project",
      link: "https://abcd-example.com",
      tags: ["Bootstrap", "CSS", "Javascript"],
    },
    {
      id: 3,
      imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
      projectName: "Chat Application",
      link: "https://abcd-example.com",
      tags: ["MongoDB", "Javascript"],
    },
    {
      id: 4,
      imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
      projectName: "Social Media Platform",
      link: "https://abcd-example.com",
      tags: ["Vue", "Javascript"],
    },
    {
      id: 5,
      imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
      projectName: "Image Sharing Platform",
      link: "https://abcd-example.com",
      tags: ["React", "Javascript"],
    },
  ];
  localStorage.setItem("projects",JSON.stringify(projects));



