

function generateHtmlManager(manager) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css"/>
        <title>Team Profile Generator</title>
    </head>

    <body>
      <div class="jumbotron jumbotron-fluid jumbotronCSS">
        <div class="container">
          <h1 class="display-4">My Team</h1>
        </div>
      </div>

      <div id="allCards">

        <div class="card">
          <div class="card-header">
            Name: ${manager.name}
            <br>
            Title: ${manager.getRole()}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
          </ul>
        </div>
    `
}

function generateHtmlEngineer(engineer) {
  return `          
        <div class="card">
          <div class="card-header">
            Name: ${engineer.name}
            <br>
            Title: ${engineer.getRole()}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github} GitHub</a></li>
          </ul>
        </div>
        `
}

function generateHtmlIntern(intern) {
  return `
        <div class="card">
          <div class="card-header">
            Name: ${intern.name}
            <br>
            Title: ${intern.getRole()}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
          </ul>
        </div>
        `
}

function generateHtmlEnd() {
  return `
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

    </body>
    </html>
  `
}

module.exports = {
  generateHtmlManager,
  generateHtmlEngineer,
  generateHtmlIntern,
  generateHtmlEnd
}

  
