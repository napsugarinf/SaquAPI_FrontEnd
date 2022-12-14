# SaquAPIFrontEnd
The repository contains the FrontEnd part of the SauAPI Project. The project aims to help to record the watermeter position of each room in each month at SAPIENTIA EMTE Boarding School.
This project's frontend was created with the help of Angular ( https://angular.io ), a platform for building mobile and desktop web applications, npm, a package manager for the JavaScript programming language maintained by npm, the default package manager for the JavaScript runtime environment Node.js. As the programming language, the code is written in Typescript ( https://www.typescriptlang.org/ ).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2. Later we updated it to Angular CLI : 14.2.9. 

## Description of the project 
The application has got two modes.
User and Admin.
### User
Each room has got a number, therefore the users are identified by the room number.
Each room has got two watermeters: one for cold water and one for hot water.
The positions of the watermeters have to be recorded each month in order to
generate the bill for the respective room.
The user authenticates itself with the room number and a given password.
Then they are able to save their water meter positions and upload a picture as proof.
There is a feature still under developement which would scan the uploaded picture and
would read the positions of the watermeters and fill the input fields automatically.
### Admin
The admin controls the whole process. He can list the users, list, check, modify and delete
their data.


## Technologies used
 - Visual Studio Code
 - Node.js
 - npm


## Prerequisites
 - Visual Studio Code
 - Node.js v18.12.1
 - Angular CLI 14.2.9 

## Challanges
The greatest challenge of the project is the detection of numbers of pictures taken from different angles
and different light conditions.
Other challenges: storage and movement of pictures between client and server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

For more information related to the used technologies please visit the websites given above.
