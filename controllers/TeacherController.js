const { Comment, Post, Teacher } = require('../models')


const GetAllPosts = async (req, res) => {

    try{ 

        const allPosts = await Post.findAll({})
        res.send(allPosts)



    }catch(error) {
        throw error

    }

}

const GetIndTeacher = async (req, res) => {

    try{

        const indTeacher = await Teacher.findByPk(parseInt(req.params.teacher_id))
        res.send(indTeacher)

    }catch (error){
        throw error
    }

}

const GetIndTeacherPosts = async (req, res) => {

    try{

        const teacherPosts = await Post.findAll({
            where: {teacher_id: parseInt(req.params.teacher_id)}
        })

        res.send(teacherPosts)

    } catch (error) {
        throw error

    }


}

const IndPost = async (req, res) => {

    try{

        const indPost = await Post.findByPk(parseInt(req.params.post_id))
        const getComments = await Comment.findAll({
            where: {post_id: parseInt(req.params.post_id)}
        })
        res.send({indPost, getComments})


    }catch (error) {
        throw error
    }

}

// const GetComments = async (req, res) => {

//     try{

//         const getComments = await Comment.findAll({
//             where: {post_id: parseInt(req.params.post_id)}
//         })
//         res.send(getComments)
//     } catch (error){
//         throw error
//     }


// }

const CreatePost = async (req, res) => {

    try{

        const teacher_id = parseInt(req.params.teacher_id)
        let postBody = {
            teacher_id,
            ...req.body
        }
        const newPost = await Post.create(postBody)
        res.send(newPost)

    }catch(error){
        throw error
    }


}

const CreateComment = async (req, res) => {

    try{
        const post_id = parseInt(req.params.post_id)
        const commentBody = {
            post_id,
            ...req.body
        }
        const newComment = await Comment.create(commentBody)
        res.send(commentBody)
    }catch(error) {
        throw error
    }


}

module.exports = {
    GetAllPosts,
    GetIndTeacher,
    GetIndTeacherPosts,
    IndPost,
    // GetComments,
    CreatePost,
    CreateComment,
}

// put waiting for group confirmation (for posts and profile)

// delete waiting for group confirmation


//localStorage.setItem('user', ':teacher_id')