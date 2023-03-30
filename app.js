import express from "express";
import templateEngine from "./util/templateEngine.js";
import users from "./util/users/users.js";

const app = express();
app.use(express.static("public"));
app.use(express.json()) // to backend data
app.use(express.urlencoded({extended:true}))


// -------------- PAGES -------------- //
const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "Home | My notes"
});

const admin = templateEngine.readPage("./public/pages/admin/admin.html");
const adminPage = templateEngine.renderPage(admin, {
    tabTitle: "Admin | My notes"
});

const git = templateEngine.readPage("./public/pages/git/git.html");
const gitPage = templateEngine.renderPage(git, {
    tabTitle: "Git | My notes"
})

const dataTypes = templateEngine.readPage("./public/pages/datatypes/datatypes.html");
const dataTypesPage = templateEngine.renderPage(dataTypes, {
    tabTitle: "Data Types | My notes"
});

const apiDesign = templateEngine.readPage("./public/pages/apiDesign/apiDesign.html");
const apiDesignPage = templateEngine.renderPage(apiDesign, {
    tabTitle: "Rest API Design | My notes"
});

const date = templateEngine.readPage("./public/pages/date/date.html");
const datePage = templateEngine.renderPage(date, {
    tabTitle: "Date | My notes"
});

const fetch = templateEngine.readPage("./public/pages/fetch/fetch.html");
const fetchPage = templateEngine.renderPage(fetch, {
    tabTitle: "Fetch | My notes"
});

const variables = templateEngine.readPage("./public/pages/variables/variables.html");
const variablesPage = templateEngine.renderPage(variables, {
    tabTitle: "Variables | My notes"
})

const operations = templateEngine.readPage("./public/pages/operations/operations.html");
const operationsPage = templateEngine.renderPage(operations, {
    tabTitle:" Operations | My notes"
});

const scope = templateEngine.readPage("./public/pages/scope/scope.html");
const scopePage = templateEngine.renderPage(scope, {
    tabTitle: "Scope | My notes"
});

const loopMethods = templateEngine.readPage("./public/pages/loopMethods/loopMethods.html");
const loopMethodsPage = templateEngine.renderPage(loopMethods, {
    tabTitle: "Loop Methods | My notes"
});

const functions = templateEngine.readPage("./public/pages/functions/functions.html");
const functionsPage = templateEngine.renderPage(functions, {
    tabTitle:"Functions | My notes"
});

const login = templateEngine.readPage("./public/pages/login/login.html");
const loginPage = templateEngine.renderPage(login, { 
    tabTitle: "Login | My notes "
});

const simpleServerGuide = templateEngine.readPage("./public/pages/simpleServerGuide/simpleServerGuide.html");
const simpleServerGuidePage = templateEngine.renderPage(simpleServerGuide, {
    tabTitle: "Setup Guide | My nodes "
});

const crudRestApi = templateEngine.readPage("./public/pages/crudRestApi/crudRestApi.html");
const crudRestApiPage = templateEngine.renderPage(crudRestApi, {
    tabTitle: "CRUD | My notes"
});

const tools = templateEngine.readPage("./public/pages/tools/tools.html");
const toolsPage = templateEngine.renderPage(tools, {
    tabTitle: "Tools | My notes"
});

const importExport = templateEngine.readPage("./public/pages/import_export/importExport.html");
const importExportPage = templateEngine.renderPage(importExport, {
    tabTitle: "Import/Export | My notes"
});

const ssrCsr = templateEngine.readPage("./public/pages/ssr_csr/ssr-csr.html");
const ssrCsrPage = templateEngine.renderPage(ssrCsr, {
    tabTitle: "SSR & CSR | My notes"
});

const getData = templateEngine.readPage("./public/pages/getData/getData.html");
const getDataPage = templateEngine.renderPage(getData, {
    tabTitle: "Get Data | My notes"
})

const htmlInExpress = templateEngine.readPage("./public/pages/htmlInExpress/htmlInExpress.html");
const htmlInExpressPage = templateEngine.renderPage(htmlInExpress, {
    tabTitle: "HTML | My notes"
});
  

// -------------- ROUTES -------------- //
// Home page 
app.get("/", (req, res) => {
    res.send(frontpagePage);
});

// Login
app.get('/login', (req, res) => {
    res.send(loginPage);
});

// Admin Page
app.get("/admin", (req, res) => {
    res.send(adminPage);
});

// Git commands
app.get("/git", (req, res) => {
    res.send(gitPage);
});

// Data Types
app.get("/data-types", (req, res) => {
    res.send(dataTypesPage);
});

// Api Design
app.get("/rest-api-design", (req, res) => {
    res.send(apiDesignPage);
});

// Date 
app.get("/date", (req, res) => {
    res.send(datePage);
})

// Fetch 
app.get("/fetch", (req, res) => {
    res.send(fetchPage);
});

// Variables
app.get("/variables", (req, res) => {
    res.send(variablesPage);
});

// Operations
app.get("/operations", (req, res) => {
    res.send(operationsPage);
});

// Scope
app.get("/scope", (req, res) => {
    res.send(scopePage);
});

// Loop Methods 
app.get("/loop-methods", (req, res) => {
    res.send(loopMethodsPage);
});

// Functions
app.get("/functions", (req, res) => {
    res.send(functionsPage);
});

// Simple Server Guide
app.get("/simple-server-guide", (req, res) => {
    res.send(simpleServerGuidePage);
})

// CRUD REST API
app.get("/crud-rest-api", (req,res) => {
    res.send(crudRestApiPage);
});

// Tools
app.get("/tools", (req, res) => {
    res.send(toolsPage)
})

// Import/Export 
app.get("/import-export", (req, res) => {
    res.send(importExportPage);
})

// SSR + CSR
app.get("/ssr-csr", (req, res) => {
    res.send(ssrCsrPage);
});

// get Data - Query String + Path Variable
app.get("/get-data", (req, res) => {
    res.send(getDataPage);
});

// HTML with Express
app.get("/html-express", (req, res) => {
    res.send(htmlInExpressPage);
});


// -------------- API's -------------- //
// login user validate (POST)
const usersList = users.getUsers();
app.post("/api/users", (req, res) => {
    const userToLogin = req.body;
    const validateUserExit =  usersList.find(user => user.username === userToLogin.username && user.password === userToLogin.password)
    if(validateUserExit){
        res.redirect("/admin");
    } else {
        res.redirect("/login");
    }
    
});

// -------------- PORT -------------- //
const PORT = 8080;
app.listen(PORT, (error) => {
    if(error){
        console.log(error);
    }
    console.log("Server is running on port: ", PORT);
});
