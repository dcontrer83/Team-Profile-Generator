

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
    
              </div> 
    `
}

module.exports = generateHtmlManager;