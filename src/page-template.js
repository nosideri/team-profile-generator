
function generatePage(allTeamMembers) {
    console.log(allTeamMembers[0].getName())
    let content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <style>
        body {
            background-color: #ccffff;
        }

        h1 {
            color: #ccffff;
        }

        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .card {
            padding: 15px;
            border-radius: 6px;
            background-color: whitesmoke;
            color: black;
            margin: 15px;
        }

        .text {
            padding: 15px;
            border-radius: 6px;
            background-color: #ccffff;
            color: black;
            margin: 15px;
        }

        .col {
            flex: 1;
            text-align: center;
            color:  #ccffff;
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
        <span class="navbar-brand mb-0 h1">
            <h1>My Team</h1>
        </span>
    </nav> <div class="row">`

    for (var i = 0; i < allTeamMembers.length; i++) {

       content = content + `   
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4> ${allTeamMembers[i].getName()} </h4>
            </div>
            <div class="col card-header">
                <h4> ${allTeamMembers[i].getRole()}</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: ${allTeamMembers[i].getId()}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${allTeamMembers[i].getEmail()}">${allTeamMembers[i].getEmail()}</a></li>
               ${allTeamMembers[i].getRole() ===  "Manager" ?  
               "<li class='list-group-item'>Office Number:" +allTeamMembers[i].getOfficeNumber()+ "</li>" :
                allTeamMembers[i].getRole() === "Engineer" ?    
                 "<li class='list-group-item'>Github:" +allTeamMembers[i].getGithub()+ "</li>" :
                 "<li class='list-group-item'>School:" +allTeamMembers[i].getSchool()+ "</li>"
               }
            </ul>
        </div>
       
      
    
`
    }


    content = content + `   </div></body></html>`



     return content;


}

module.exports = generatePage;