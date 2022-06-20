class userController {
    async userLogin(req, res) {
        res.json({ msg: "nice" })
    }
}

module.exports = new userController()