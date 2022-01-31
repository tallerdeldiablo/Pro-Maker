function generateHTML(data) {
  console.log(data);
  var cards='';
  var div2 = '';
 

// const usersByid = data.map(item => {
// data.forEach(item => {
  function getcards(dataArray) {
      for (let index = 0; index < dataArray.length; index++) {
        var div3 = '';
        switch (dataArray[index].getRole()) {
          case 'Manager':
            
          div3 = `   <li class="list-group-item"> Offiice number :${dataArray[index].phone} </li>`
        
            break;
            case 'Engineer':
            
          div3 = `   <li class="list-group-item"> Github :${dataArray[index].github} </li>  `
     
            break;  

            case 'Intern':
            
              div3 = `    <li class="list-group-item"> ID: ${dataArray[index].id}</li>`
              
                break; 
          
          default: `    </div> `

            break;
          }
        cards +=   `  
        <div class="col-sm-3">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  <h3>Example heading <span class="badge badge-secondary"> Role ${dataArray[index].getRole()}</span></h3>
                </div>
                    <ul class="list-group list-group-flush">
                 
                      <li class="list-group-item"> Name: ${dataArray[index].name}</li>
                      <li class="list-group-item"> ID: ${dataArray[index].id}</li>
                      ${div3}
                    </ul> 
              </div>
           </div> 
  
         `
           
        
                 
        
      }
      return cards;

    }


return   `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
<div class="container">

${getcards(data)}



</div>
</body>
</html>`

}

module.exports = generateHTML; 