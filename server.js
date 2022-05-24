//////// IMPORT ////////////
const express = require('express');
// const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();
const middleware = require('./middleware')

/////////// MIDDLEWARE //////////
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
/////////// DEFINE CONTROLLER VARIABLES /////////////
const controllerT = require('./controllers/TeacherController')
const controllerA = require('./controllers/AuthController')
const controllerU = require('./controllers/UserController')

///////////////// ALL ROUTES ////////////////
app.get('/', (req, res) => res.json({ message: 'Server Works'}))

app.get('/posts', controllerT.GetAllPosts)
app.get('/questions', controllerU.GetAllQuestions)
app.get('/session',
middleware.stripToken,
middleware.verifyToken,
controllerA.CheckSession)
app.post('/posts/:teacher_id', 
controllerT.CreatePost)
app.delete('/posts/:post_id', 
controllerT.DeletePost)
app.put('/posts/:post_id', 
controllerT.UpdatePost)
app.put('/:teacher_id',
controllerT.UpdateTeacher)
app.get('/posts/:teacher_id', controllerT.GetIndTeacherPosts)
app.get('/posts/postdetail/:post_id', controllerT.IndPost)
app.get('/teacher_info', controllerT.GetAllTeacherUsernameNEmail)
app.post('/posts/:teacher_id', controllerT.CreatePost)
app.post('/comments/:post_id', controllerT.CreateComment)
app.post('/newuser', controllerU.CreateUsers)
app.post('/questions/:user_id', controllerU.CreateQuestions)
app.post('/questions/reply/:question_id', controllerU.CreateReplies)
app.post('/login', controllerA.Login)
app.post('/register', controllerA.Register)
app.get('/:teacher_id', controllerT.GetIndTeacher)
app.delete('/posts/:post_id', controllerT.DeletePost)
app.put('/likes/:post_id', controllerT.UpdateLikes)



/////////// EXPRESS SERVER LISTEN TO PORT ///////////////
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))