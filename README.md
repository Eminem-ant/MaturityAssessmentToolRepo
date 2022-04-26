# MaturityAssessmentToolRepo
A Repository for Maturity Assessment Tool

Download the Project from GitHub

Select the file in the Angular Folder

Open the project in Visual Studio Code and Run the commands:
    npm install and ng serve --open

Run the SQL commands present in the .txt file in the Database folder

Fill up the required database entries

Open the Project_MAT in Visual Studio

Change the connection string to the newly created database’s connection string.

Run the following command in the NuGet package manager console:
    Scaffold-DbContext "(new connection string)" Microsoft.EntityFrameworkCore.Sqlserver -outputDir Models -Force
