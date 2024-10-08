// ==================Personal Data ======================

let personalDetails = document.getElementById(
  "personalDetails"
) as HTMLFormElement;
function personalForm(event: any) {
  event.preventDefault();
  type Obj = {
    name: string;
    designation: string;
    email: string;
    phone: string;
    address: string;
    github: string;
    linkedin: string;
    twitter: string;
    objective: string;
    // image: string;
  };
  if (
    event.target.name &&
    event.target.designation &&
    event.target.email &&
    event.target.phone &&
    event.target.address &&
    event.target.github &&
    event.target.linkedin &&
    event.target.twitter &&
    event.target.objective
  ) {
    let obj: Obj = {
      name: event.target.name.value,
      designation: event.target.designation.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
      github: event.target.github.value,
      linkedin: event.target.linkedin.value,
      twitter: event.target.twitter.value,
      objective: event.target.objective.value,
      // image: event.target.image.value,
    };

    localStorage.setItem("personalData", JSON.stringify(obj));
    event.target.name.value = "";
    event.target.designation.value = "";
    event.target.email.value = "";
    event.target.phone.value = "";
    event.target.address.value = "";
    event.target.github.value = "";
    event.target.linkedin.value = "";
    event.target.twitter.value = "";
    event.target.objective.value = "";
  } else {
    console.error("All fields are required.");
  }
}
personalDetails.addEventListener("submit", personalForm);
// ==================Educational Data ======================

let education = document.getElementById("education") as HTMLFormElement;

education.addEventListener("submit", (event: any) => {
  event.preventDefault();
  if (event.target.collageName && event.target.course) {
    let educationData: Obj[] = JSON.parse(
      localStorage.getItem("educationData") || "[]"
    );
    type Obj = {
      collageName: string;
      course: string;
    };
    let obj: Obj = {
      collageName: event.target.collageName.value,
      course: event.target.course.value,
    };
    educationData.push(obj);
    localStorage.setItem("educationData", JSON.stringify(educationData));
    event.target.collageName.value = "";
    event.target.course.value = "";
  } else {
    console.error("All fields are required.");
  }
});
// =================================skills============================

let addSkill = document.getElementById("skills") as HTMLInputElement;
let show_skill = document.getElementById("show_skill") as HTMLDivElement;

addSkill.addEventListener("submit", (event: any) => {
  event.preventDefault();

  let skillsData: string[] = JSON.parse(
    localStorage.getItem("skillData") || "[]"
  );
  if (event.target.skill) {
    skillsData.push(event.target.skill.value);
    localStorage.setItem("skillData", JSON.stringify(skillsData));
    event.target.skill.value = "";
    show_skill.innerHTML = "";
    for (let i = 0; i < skillsData.length; i++) {
      show_skill.innerHTML += `<p>${skillsData[i]}</p>`;
    }
  } else {
    console.error("All fields are required.");
  }
});
// ============================= experience details ======================
let experience = document.getElementById("experience") as HTMLFormElement;

experience.addEventListener("submit", (event: any) => {
  event.preventDefault();
  console.log(event.target);

  if (
    event.target.exp_designation &&
    event.target.exp_company &&
    event.target.exp_description
  ) {
    let experienceData: Obj[] = JSON.parse(
      localStorage.getItem("expData") || "[]"
    );
    type Obj = {
      exp_designation: string;
      exp_company: string;
      exp_description: string;
    };

    let obj: Obj = {
      exp_designation: event.target.exp_designation.value,
      exp_company: event.target.exp_company.value,
      exp_description: event.target.exp_description.value,
    };
    experienceData.push(obj);
    localStorage.setItem("expData", JSON.stringify(experienceData));
    event.target.exp_designation.value = "";
    event.target.exp_company.value = "";
    event.target.exp_description.value = "";
  } else {
    console.error("All fields are required.");
  }
});

// =============================Projects Details=========================

let addProject = document.getElementById("projects") as HTMLInputElement;

addProject.addEventListener("submit", (event: any) => {
  event.preventDefault();
  if (event.target.projectName && event.target.projectLink) {
    let projectData: Obj[] = JSON.parse(
      localStorage.getItem("projectData") || "[]"
    );
    type Obj = {
      projectName: string;
      projectLink: string;
    };

    let obj: Obj = {
      projectName: event.target.projectName.value,
      projectLink: event.target.projectLink.value,
    };
    projectData.push(obj);
    localStorage.setItem("projectData", JSON.stringify(projectData));
    event.target.projectName.value = "";
    event.target.projectLink.value = "";
  } else {
    console.error("All fields are required.");
  }
});

// ===================================set resume Data==========================
let resume_name = document.getElementById("resume_name") as HTMLElement;
let resume_designation = document.getElementById(
  "resume_designation"
) as HTMLElement;
let resume_bio = document.getElementById("resume_bio") as HTMLElement;
let resume_email = document.getElementById("resume_email") as HTMLElement;
let resume_phone = document.getElementById("resume_phone") as HTMLElement;
let resume_address = document.getElementById("resume_address") as HTMLElement;
let resume_linkedin = document.getElementById("resume_linkedin") as HTMLElement;
let resume_github = document.getElementById("resume_github") as HTMLElement;
let resume_twitter = document.getElementById("resume_twitter") as HTMLElement;
let resume_image = document.getElementById("resume_img") as HTMLImageElement;

let generateResume = document.getElementById(
  "generateResume"
) as HTMLButtonElement;
generateResume.addEventListener("click", () => {
  let personalData = JSON.parse(localStorage.getItem("personalData") || "[]");
  if (personalData) {
    resume_name.innerHTML = personalData.name;
    resume_designation.innerHTML = personalData.designation;
    resume_bio.innerHTML = personalData.objective;
    resume_email.innerHTML = `<i class="fa-solid fa-envelope"></i> ${personalData.email}`;
    resume_phone.innerHTML = `<i class="fa-solid fa-phone"></i> ${personalData.phone}`;
    resume_address.innerHTML = `<i class="fa-solid fa-location-dot"></i>${personalData.address}`;
    resume_linkedin.innerHTML = `<i class="fa-brands fa-linkedin"></i>${personalData.linkedin}`;
    resume_github.innerHTML = `<i class="fa-brands fa-github"></i>${personalData.github}`;
    resume_twitter.innerHTML = `<i class="fa-brands fa-twitter"></i>${personalData.twitter}`;
    // resume_image.src = personalData.image;
  }

  let educationData = JSON.parse(localStorage.getItem("educationData") || "[]");
  if (educationData) {
    let education = document.querySelector(".education") as HTMLElement;
    education.innerHTML = "";
    for (let i = 0; i < educationData.length; i++) {
      education.innerHTML += `<ul>
              <li class="course">Intermediate (Computer Science)</li>
              <li class="institue">Pakistan Ship Owner's College</li>
            </ul>`;
    }
  }

  let skillData = JSON.parse(localStorage.getItem("skillData") || "[]");
  if (skillData) {
    let skills = document.querySelector(".skills_list") as HTMLElement;
    skills.innerHTML = "";
    for (let i = 0; i < skillData.length; i++) {
      skills.innerHTML += `<li>${skillData[i]}</li>`;
    }
  }

  let experienceData = JSON.parse(localStorage.getItem("expData") || "[]");
  if (experienceData) {
    let experience = document.querySelector(".experience") as HTMLElement;
    experience.innerHTML = "";
    for (let i = 0; i < experienceData.length; i++) {
      experience.innerHTML += ` <ul>
              <li class="position">${experienceData[i].exp_designation}</li>
              <li class="company">${experienceData[i].exp_company}</li>
              <li class="description">${experienceData[i].exp_description}
              </li>
            </ul>`;
    }
  }

  let projectData = JSON.parse(localStorage.getItem("projectData") || "[]");
  if (projectData) {
    let projects = document.querySelector("#project_list") as HTMLElement;
    projects.innerHTML = "";
    for (let i = 0; i < projectData.length; i++) {
      projects.innerHTML += `<li>
               ${projectData[i].projectName}
                <a href="${projectData[i].projectLink}" target="_blank">
               ${projectData[i].projectLink}  <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </li>`;
    }
  }

  let container = document.querySelector(".container") as HTMLElement;
  container.style.display = "block";
  let form = document.querySelector("#form") as HTMLElement;
  form.style.display = "none";
});

// ============================= show hide ======================
let nav = document.getElementById("nav") as HTMLUListElement;

if (nav) {
  const liElements = nav.querySelectorAll("li");

  liElements.forEach((li, index) => {
    li.addEventListener("click", () => {
      liElements.forEach((li) => {
        li.id = "";
      });
      const sections = document.querySelectorAll(`section`);
      if (sections) {
        sections.forEach((section) => {
          section.style.display = "none";
          if (section.classList.contains(li.innerText.toLowerCase())) {
            section.style.display = "grid";
            li.id = "active";
          }
        });
      }
    });
  });
} else {
  console.error("The <ul> element was not found.");
}
