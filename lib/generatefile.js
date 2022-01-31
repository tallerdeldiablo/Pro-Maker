function generateHTML(data) {
  console.log(data);
  var cards='';
    data.forEach(emploo => {

      cards =   `  <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hi! My name is ${emploo.name}</h1>
        <h3>Example heading <span class="badge badge-secondary">${emploo.getRole()}</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My GitHub username is ${emploo.mail}</li>
          <li class="list-group-item">LinkedIn: </li>
        </ul>
      </div>
    </div>
    </body>`
      

    });


  
  return   `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
${cards}
  </html>`
 
  
}

module.exports = generateHTML; 