const db = require("../models");
const Quiz = db.quizzes;

exports.create = async (req, res) => {
    try {
        const data = await Quiz.create(req.body)
        res.json({
            message: "quiz created successfully.",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

exports.getAll = async (req, res) => {
    try {
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quizzes retrieved successfully",
            data: quizzes,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty:true})
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Quizzes update successfully",
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured while retrieving quiz",
            data: null,
        });
    }
}
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty:true})
        quiz.destroy()
        res.json({
            message: "Quizzes deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured while retrieving quiz",
            data: null,
        });
    }
}

exports.findone = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty:true})
        res.json({
            message: `Quizzes retrieved successfully with id=${id}.`,
            data: quiz,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured while retrieving quiz",
            data: null,
        });
    }
}

exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            levelId: id
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with categoryId=${id}.`,
        data: quizzes,
    })
}

exports.getByLevelId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            categoryId: id
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with levelId=${id}.`,
        data: quizzes,
    })
}