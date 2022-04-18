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
        res.send(newComment)
    }catch(error) {
        throw error
    }


}

const DeletePost = async (req, res) => {
    try {
        const postId = parseInt(req.params.post_id)
        const deletedPost = await Post.destroy({where: {id:postId}})
        res.send({message: `Deleted post with an id of ${postId}`})
    } catch(error) {
        throw error
    }
}

const UpdatePost = async (req, res) => {
    try {
        const postId = parseInt(req.params.post_id)
        let updatedPost = await Post.update(req.body, {
            where: {id: postId},
            returning: true
        })
        res.send(updatedPost)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllPosts,
    GetIndTeacher,
    GetIndTeacherPosts,
    IndPost,
    CreatePost,
    CreateComment,
    DeletePost,
    UpdatePost
}

