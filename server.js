const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

const controller = require('./controllers/TeacherController')

app.get('/posts', controller.GetAllPosts)
app.get('/posts/:teacher_id', controller.GetIndTeacherPosts)
app.get('/:teacher_id', controller.GetIndTeacher)
app.get('/posts/postdetail/:post_id', controller.IndPost)

app.post('/posts/:teacher_id', controller.CreatePost)
app.post('/comments/:post_id', controller.CreateComment)

app.delete('/posts/:post_id', controller.DeletePost)

app.put('/posts/:post_id', controller.UpdatePost)

app.get('/', (req, res) => res.json({ message: 'Server Works'}))
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))