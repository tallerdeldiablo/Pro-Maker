function generateHTML(data) {
  console.log(data);
  var cards='';
  var div2 = '';
  var div3 = '';

const usersByid = data.map(item => {
 
  div2 =  `  <body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is </h1>
    <h3>Example heading <span class="badge badge-secondary">${item.getRole()}</span></h3>
    <ul class="list-group">
     
      <li class="list-group-item"> ID :${item.id} </li>
      <li class="list-group-item"> Email :${item.mail} </li>
 `
switch (item.getRole()) {
  case 'Manager':
    
 div3 = `   <li class="list-group-item"> Offiicenumber :${item.phone} </li> </ul>
 </div>
</div>

</body>`
    break;
    case 'Engineer':
    
 div3 = `   <li class="list-group-item"> Github :${item.github} </li> </ul>
 </div>
</div>

</body>`
    break;  
    case 'Intern':
    
      div3 = `   <li class="list-group-item"> School :${item.school} </li> </ul>
      </div>
     </div>
     
     </body>`
         break; 

  default: ` </ul>
  </div>
 </div>
 
 </body>`
    break;
}

    // container.age = item.name.length * 10;

})

console.log(div2);




    // data.forEach(emploo => {

    //   cards =   `  <body>
    //   <div class="jumbotron jumbotron-fluid">
    //   <div class="container">
    //     <h1 class="display-4">Hi! My name is ${emploo.name}</h1>
    //     <h3>Example heading <span class="badge badge-secondary">${emploo.getRole()}</span></h3>
    //     <ul class="list-group">
    //       <li class="list-group-item">My id is ${emploo.id}</li>`
    //       switch (emploo.getRole()) {
    //         case "Manager":
    //           `<li class="list-group-item">My office is </li>`
    //           break;

    //         case "Engineer":
    //             `<li class="list-group-item">My oe is </li>`
    //             break;
    //         default:
    //           break;
    //       }
         
         

    //    ` </ul>
    //   </div>
    // </div>
  
    // </body>`
      

    // });


  
  return   `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>

<p>uses </p>${usersByid}
<p>div </p>${div2} ${div3}
  </html>`
 
  
}

module.exports = generateHTML; 