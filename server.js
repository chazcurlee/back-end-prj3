//////// IMPORT ////////////
const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();
const middleware = require('./middleware')

/////////// MIDDLEWARE //////////
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

/////////// DEFINE CONTROLLER VARIABLES /////////////
const controllerT = require('./controllers/TeacherController')
const controllerA = require('./controllers/AuthController')
const controllerU = require('./controllers/UserController')

///////////////// ALL ROUTES ////////////////
app.get('/', (req, res) => res.json({ message: 'Server Works'}))

//AUTH ROUTES
app.post('/login', controllerA.Login)
app.post('/register', controllerA.Register)
app.get('/session',
middleware.stripToken,
middleware.verifyToken,
controllerA.CheckSession)

// GET ROUTES
app.get('/posts', controllerT.GetAllPosts)
app.put('/posts/:post_id', controllerT.UpdatePost)
app.put('/:teacher_id', controllerT.UpdateTeacher)
app.get('/posts/:teacher_id', controllerT.GetIndTeacherPosts)
app.get('/posts/postdetail/:post_id', controllerT.IndPost)
app.get('/teacher_info', controllerT.GetAllTeacherUsernameNEmail)
app.get('/:teacher_id', controllerT.GetIndTeacher)

// POST ROUTES
app.post('/posts/:teacher_id', controllerT.CreatePost)
app.post('/comments/:post_id', controllerT.CreateComment)

// DELETE ROUTES
app.delete('/posts/:post_id', controllerT.DeletePost)

// PUT ROUTES
app.put('/likes/:post_id', controllerT.UpdateLikes)

// POST MVP ROUTES //
app.get('/questions', controllerU.GetAllQuestions)
app.post('/newuser', controllerU.CreateUsers)
app.post('/questions/:user_id', controllerU.CreateQuestions)
app.post('/questions/reply/:question_id', controllerU.CreateReplies)

/////////// EXPRESS SERVER LISTEN TO PORT ///////////////
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))