
let projects = []

function addProject(event) {
    event.preventDefault()
    
    let title = document.getElementById('input-project').value
    let startDate = document.getElementById('input-start').value
    let endDate = document.getElementById('input-end').value
    let desc = document.getElementById('input-desc').value
    let tech1 = document.getElementById('node').checked
    let tech2 = document.getElementById('react').checked
    let tech3 = document.getElementById('next').checked
    let tech4 = document.getElementById('type').checked
    let image = document.getElementById('input-img').files
    
    image = URL.createObjectURL(image[0])

    let project = {
        title,
        startDate,
        endDate,
        desc,
        tech1,
        tech2,
        tech3,
        tech4,
        image
    }

    projects.push(project)

    renderProject()
}

function renderProject() {
    
    document.getElementById('list-myproject').innerHTML = ''

    for (let i = 0; i < projects.length; i++) {
        
        document.getElementById('list-myproject').innerHTML += `

        <div class="project-list-item">
                <a href="project-detail.html">

                    <div class="card-img">
                        <img src="${projects[i].image}">
                    </div>

                    <div class="card-title">
                        <h3>${projects[i].title}</h3>
                    </div>

                    <div class="card-drt">
                        <p>${getTime(projects[i].startDate, projects[i].endDate)}</p>
                    </div>

                    <div class="card-desc">
                        <p>${projects[i].desc}</p>
                    </div>

                    <div class="card-icon">
                        ${projects[i].tech1?`<img src="assets/IMG/nodejs.png"/>` : ""}
                        ${projects[i].tech2?`<img src="assets/IMG/react.png"/>` : ""}
                        ${projects[i].tech3?`<img src="assets/IMG/nextjs.png"/>` : ""}
                        ${projects[i].tech4?`<img src="assets/IMG/typescript.png"/>` : ""}
                        
                    </div>

                </a>

                <div class="card-btn">
                    <div class="edit-btn">
                        <button>edit</button>
                    </div>
                    <div class="del-btn">
                        <button>delete</button>
                    </div>
                </div>

            </div>
        
        `
    
    }

}

function getTime(startDate, endDate) {
    if(startDate[5] == 0){
        startDate = startDate[6]
    } else {startDate = startDate[5]+startDate[6]}

    if(endDate[5] == 0) {
        endDate = endDate[6]
    }else {endDate = endDate[5]+endDate[6]}

    const startMonth = Number(startDate);
    const endMonth = Number(endDate);

    const duration = endMonth - startMonth

    if(duration === 0) return "<1 bulan"

    return endMonth - startMonth + " " + "bulan"
}

