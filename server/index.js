const express = require('express');
const port = 1900
const App = express();


App.get('/', (req, res)=>{
    res.send("<h1>Welcome to Express Handson</h1>")
})
App.get('/api/main/', (req, res)=>{
    res.json({
        "What is Node js" : "Node.js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language. " ,
        "Express js": "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.",
    })
    // res.send("<h1>Express Js</h1> <p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.<p> <h2>Why Express Js</h2> <ul><li>Express was created to make APIs and web applications with ease,</li><li>It saves a lot of coding time almost by half and still makes web and </li><li>mobile applications are efficient.</li><li>Another reason for using express is that it is written in javascript as javascript is an easy language even if you don't have a previous</li></ul>")
})
App.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
})



