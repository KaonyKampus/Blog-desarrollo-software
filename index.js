

let currentPage = window.location.href;

if(currentPage.includes("principal")){
    document.getElementById("principal").classList.add("active");
}else if(currentPage.includes("quien")){
    document.getElementById("quien").classList.add("active");
}else if(currentPage.includes("contacto")){
    document.getElementById("contacto").classList.add("active")
}