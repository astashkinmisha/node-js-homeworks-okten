module.exports = {
    loginUser: (req, res) => {
        try {
            const {login} = req.body;

            res.json(`Successful ${login}, congratulations!`);
        } catch (e) {
            res.json(e.message);
        }
    }
}