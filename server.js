const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();
const middleware = require('./middleware')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

const controllerT = require('./controllers/TeacherController')
const controllerA = require('./controllers/AuthController')

app.get('/posts', controllerT.GetAllPosts)
app.get('/session',
middleware.stripToken,
middleware.verifyToken,
controllerA.CheckSession)
app.get('/posts/:teacher_id', controllerT.GetIndTeacherPosts)
app.get('/:teacher_id', controllerT.GetIndTeacher)
app.get('/posts/postdetail/:post_id', controllerT.IndPost)


app.post('/posts/:teacher_id', 
middleware.stripToken,
middleware.verifyToken,
controllerT.CreatePost)
app.post('/comments/:post_id', controllerT.CreateComment)
app.post('/login', controllerA.Login)
app.post('/register', controllerA.Register)




app.delete('/posts/:post_id', 
middleware.stripToken,
middleware.verifyToken,
controllerT.DeletePost)

app.put('/posts/:post_id', 
middleware.stripToken,
middleware.verifyToken,
controllerT.UpdatePost)

app.put('/:teacher_id',
middleware.stripToken,
middleware.verifyToken,
controllerT.UpdateTeacher)

app.put('/likes/:post_id', controllerT.UpdateLikes)


app.get('/', (req, res) => res.json({ message: 'Server Works'}))
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))