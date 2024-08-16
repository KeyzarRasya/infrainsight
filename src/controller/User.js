const {createAccount, loginAccount} = require('../service/user');

const signup = async(req, res) => {
    const {username, email, password} = req.body;
    const create = await createAccount(email, password, username);
    res.send(create);
}

const login = async(req, res) => {
    const {email, password} = req.body;
    const find = await loginAccount(email, password);
    res.send(find);
}

module.exports = {
    signup,
    login
}