const express = require('express'); //for server
const dotenv = require('dotenv');       // for enviorment variables
const path = require('path');   //inbuilt module no need to install it
const ejs = require('ejs');     //template engine ejs
const app = express();          //running server
const SHA256 = require('crypto-js/sha256'); ///for SHA256
// const jimp = require('jimp');
// const image = require('get-image-data/native'); //for getting image's data

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT||8080;            //defining port no

const Register = require('./models/registers'); //user registration table in GWN

const connectDB = require('./db/conn');
connectDB();        //connecting DB

app.use(express.json());
app.use(express.urlencoded({extended:false}));  //simple meaning is ki form ke andar jo bhi data hum likh rhe hain ab hum usko get krna chahte hain, usko undefined mat dikhao
const static_path = path.join(__dirname, "./public");   //yeh directory path main public folder add kr dega toh hume public folder ka poora path ek var main mil jaega
app.use(express.static(static_path));       // agar hum is line ko top pe likhte hain toh express check
                                            // krta hai ki koi static html file public folder main present hai ya nhi agar hai toh usko render kr do agar nhi hai toh simple agli line pe chalo



app.set("view engine", "ejs");



app.get('/', (req,res)=>{               //index or root path
    // res.send('Hello from rooot!');
   
    res.render("index");
});

app.get('/register', (req,res)=>{               ///register page
    // res.send('Hello from rooot!');
    res.render("register");
});

app.get('/login', (req,res)=>{               ///login page
    // res.send('Hello from rooot!');
    res.render("login");
});

app.get('/dashboard',(req,res)=>{   ///sensing node id dashboard page
res.render('dashboard');
});
app.get('/camera',(req,res)=>{       ///camera page
    res.render('camera');
});


app.get('/img',(req,res)=>{
        res.render("login_img");
    });
app.get('/update',(req,res)=>{       ///camera page
        res.render('update');
        });

app.get('/update_2',(req,res)=>{
    res.render("update_2");
});
app.get('/update_3',(req,res)=>{
    res.render("update_3");
});

app.get('/updated',(req,res)=>{
    res.render("updated");
});



app.post('/register', async(req,res)=>{               //create a neew user in the db
    try {
        console.log(req.body.image)
        //const hashPassword = SHA256(req.body.password);

       const newUser = new Register({
            email:req.body.email,
            password:req.body.password,
            imageId:req.body.image      //canvas ki id le raha hai yeh
       })
       const registered = await newUser.save();
       res.status(201).render('index');

    } catch (error) {
        res.status(400).send(error);
    }

});


app.post('/login',async(req,res)=>{
   
    try {
        const email = req.body.email;
        const password = req.body.password;
        
        const useremail = await Register.findOne({email:email});
        const userImage = useremail.imageId;

        if(useremail.password === password){
            res.status('201').render("login_img",{userImage});
        }else{
            res.send("invalid password login details");
        }

    } catch (error) {
        res.status(400).send("invalid email login details");
    }
});
app.post('/login_img', async(req,res)=>{
    try {
        const imageId = req.body.image ;
        console.log(imageId);
        const userImg = await Register.findOne({imageId:imageId});
        if(userImg.imageId === imageId){
            res.status(201).render('dashboard');
        }
    } catch (error) {
        res.status(400).send("invalid img login details");
    }
});

app.post('/dashboard', async(req,res)=>{
    try {
        const deviceId = req.body.deviceId ;
        console.log(deviceId);
        if(deviceId == 'VFC6909'){
            res.status(201).render('camera');
        }
    } catch (error) {
        res.status(400).send("invalid sensing node id");
    }
});
app.post('/update', async(req,res)=>{               //create a neew user in the db
    try {
        
     var email = req.body.email;
     var oldPassword = req.body.password;
             
     const useremail = await Register.findOne({email:email});
     if(useremail.password === oldPassword){
        res.status('201').render("update_2");
         }
    else{
        res.send("invalid details");
            }

    //    const registered = await newUser.save();
      

    } catch (error) {
        res.status(400).send(error);
    }

});
app.post('/update_2', async(req,res)=>{               //create a neew user in the db
    try {
        
    //  var newPassword = req.body.newPassword;
    //  var confirmPassword = req.body.confirmPassword;
        res.status('201').render("update_3");
    } catch (error) {
        res.status(400).send(error);
    }

});


app.post('/update_3', async(req,res)=>{               //create a neew user in the db
    try {
        // console.log(newPassword);
        // db.collection( 'dbThesis' ).update (
        //     { email : email },
        //     { $set : { password:newPassword } },
        //     function( err, result ) {
        //         if ( err ) throw err;
        //     }
        // );
       
       res.status(201).render('updated');

    } catch (error) {
        res.status(400).send(error);
    }

});


app.listen(PORT, ()=> console.log(`server up and running!${PORT}`));