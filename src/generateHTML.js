const fs = require('fs');

function generateCards(team){
    let card = "";
    team.forEach(employee => {
      if(employee.getRole() === 'Manager') {
          card += `<div class="card bg-primary">
                    <h5 class="card-title text-light">${employee.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-light"><i class="fa fa-mug-hot"></i> ${employee.getRole()}</h6>
                    <div class="card-body bg-secondary">                  
                    <ul class="list-group">
                      <li class="list-group-item m-1">ID: ${employee.getId()}</li>
                      <li class="list-group-item m-1">Email: <a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
                      <li class="list-group-item m-1">Office number: ${employee.getOfficeNumber()}</li>
                    </ul>
                    </div>
                  </div>\n`
      } else if(employee.getRole() === 'Engineer'){
          card += `<div class="card bg-primary">
                    <h5 class="card-title text-light">${employee.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-light"><i class="fa fa-glasses"></i> ${employee.getRole()}</h6>
                    <div class="card-body bg-secondary">                  
                    <ul class="list-group">
                      <li class="list-group-item m-1">ID: ${employee.getId()}</li>
                      <li class="list-group-item m-1">Email: <a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
                      <li class="list-group-item m-1">Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>
                    </ul>
                    </div>
                  </div>\n`
      } else {
          card += `<div class="card bg-primary">
                    <h5 class="card-title text-light">${employee.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-light"><i class="fa fa-user-graduate"></i> ${employee.getRole()}</h6>
                    <div class="card-body bg-secondary">                  
                    <ul class="list-group">
                      <li class="list-group-item m-1">ID: ${employee.getId()}</li>
                      <li class="list-group-item m-1">Email: <a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
                      <li class="list-group-item m-1">School: ${employee.getSchool()}</li>
                    </ul>
                    </div>
                  </div>\n`
      }
    })
    return card;
}

function writeHTML (html, team){
  fs.writeFile('./dist/index.html', html, err => {
    if(err){
      console.log(err);
    }
    console.log('Creating HTML');
  })
}

function createHTML(team){
    const html = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
            <link rel="stylesheet" href="./style.css">
            <title>My Team Info</title>
        </head>
        
        <body>
            <header class="bg-danger text-center text-light">
                <h1>My Team</h1>
            </header>
            
            <main id="cardContainer" class="d-flex justify-content-center">
                  ${generateCards(team)}                  
            </main>
            <script src='../src/generateHTML.js'></script>
        </body>
    </html>`

    writeHTML(html, team);
}

module.exports = createHTML;

{/* <div class="card bg-primary">
                    <h5 class="card-title text-light">Joseph</h5>
                    <h6 class="card-subtitle mb-2 text-light"><i class="fa fa-mug-hot"></i> Manager</h6>
                    <div class="card-body bg-secondary">                  
                      <ul class="list-group">
                        <li class="list-group-item m-1">ID: </li>
                        <li class="list-group-item m-1">Email: <a href = "mailto: abc@example.com">joseph@gmail.com</a></li>
                        <li class="list-group-item m-1">Office number: </li>
                      </ul>
                    </div>
                </div> */}