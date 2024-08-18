const {createAccount, loginAccount, getUserInformation} = require('../service/user');

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

const userInfo = async(req, res) => {
    const {userId} = req.body;
    const user = await getUserInformation(userId);
    res.send(user);
}


module.exports = {
    signup,
    login,
    userInfo
}