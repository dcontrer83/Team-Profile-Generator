

function generateHtmlManager(manager) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css"/>
        <title>Document</title>
    </head>

    <body>
      <div id="allCards">

        <div class="card" style="width: 18rem;">
          <div class="card-header">
            Name: ${manager.name}
            <br>
            Title: ${manager.getRole()}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
          </ul>
        </div>
    `
}

function generateHtmlEngineer(engineer) {
  return `          
        <div class="card" style="width: 18rem;">
          <div class="card-header">
            Name: ${engineer.name}
            <br>
            Title: ${engineer.getRole()}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">GitHub: ${engineer.github}</li>
          </ul>
        </div>
        `
}

function generateHtmlIntern(intern) {
  return `
        <div class="card" style="width: 18rem;">
          <div class="card-header">
            Name: ${intern.name}
            <br>
            Title: ${intern.getRole()}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: ${intern.email}</li>
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

  
