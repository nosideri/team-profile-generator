

function generatePage() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Portfolio Demo</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

            <style>
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
                background-color: white;
                color: lightskyblue;
                margin: 15px;
            }

            .text {
                padding: 15px;
                border-radius: 6px;
                background-color: lightskyblue;
                color: black;
                margin: 15px;
            }

            .col {
                flex: 1;
                text-align: center;
            }
            </style>
        </head>

        <body>
            <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
                <span class="navbar-brand mb-0 h1">
                    <h1>My Team</h1>
                </span>
            </nav>
            <div class="row">
                <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
                    <div class="col card-header">
                        <h4> ${manager.getName()} </h4>
                    </div>
                    <div class="col card-header">
                        <h4> ${manager.getRole()}</h4>
                    </div>
                    <ul class="list-group list-group-flush text">
                        <li class="list-group-item">ID: ${manager.getID()}</li>
                        <li class="list-group-item">Email: ${manager.getEmail()}</li>
                        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
                <div class="card bg-darl justify-content-center align-items-center" style="width: 18rem;">
                    <div class="col card-header">
                        <h4> ${engineer.getName()} </h4>
                    </div>
                    <div class="col card-header">
                        <h4> ${engineer.getRole()} </h4>
                    </div>
                    <ul class="list-group list-group-flush text">
                        <li class="list-group-item">ID: ${engineer.getID()}</li>
                        <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                        <li class="list-group-item">GitHub: https://github.com/${engineer.getGithub()}</li>
                    </ul>
                </div>
                <div class="card bg-darl justify-content-center align-items-center" style="width: 18rem;">
                    <div class="col card-header">
                        <h4> ${intern.getName()} </h4>
                    </div>
                    <div class="col card-header">
                        <h4> ${intern.getRole()} </h4>
                    </div>
                    <ul class="list-group list-group-flush text">
                        <li class="list-group-item">ID: ${intern.getID()}</li>
                        <li class="list-group-item">Email: ${intern.getEmail()}</li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>

        </body>

        </html>
        `
        }

module.exports = generatePage;