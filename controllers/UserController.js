const { User, Question, Reply, Teacher } = require('../models')
const reply = require('../models/reply')
const user = require('../models/user')

const GetAllQuestions = async (req, res) => {

    try{ 
        let userId = []
        let userName = []
        const allQuestions = await Question.findAll({
            include: [
               { model: Reply, as: 'replies', attributes: ['content'] },
            ]
        })
        allQuestions.map((question) => {
            userId.push(question.user_id)
        })
        const getUser = await User.findAll({
            where: {id: parseInt(allQuestions.user_id)}
        })
        res.send(getUser)


    }catch(error) {
        throw error

    }

}

const CreateUsers = async (req, res) => {

    try{

        let userBody = {
            ...req.body
        }
        const newUser = await User.create(userBody)
        res.send(newUser)
    }catch(error){
        throw error
    }
}

const CreateQuestions = async (req, res) => {

    try{

        const user_id = parseInt(req.params.user_id)
        let questionBody = {
            user_id,
            ...req.body
        }
        const newQuestion = await Question.create(questionBody)
        res.send(newQuestion)

    }catch(error){
        throw error
    }

}

const CreateReplies = async (req, res) => {
    try{
    const question_id = parseInt(req.params.question_id)
    let replyBody = {
        question_id,
        ...req.body
    }
    const newReply = await Reply.create(replyBody)
    res.send(newReply)
    }catch(error){
        throw error
    }
}

module.exports = {
    GetAllQuestions,
    CreateUsers,
    CreateQuestions,
    CreateReplies
}