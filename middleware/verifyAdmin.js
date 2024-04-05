const User = require('../models/User');

const verifyAdmin = async (req, res, next) => {
    try {
        const checkUser = await User.findById(req.user.userId);
        console.log(checkUser);
        if (checkUser.role === 'admin') {
            next();
        } else {
            res.status(403).json({ message: 'You are not allowed to do this!' });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = verifyAdmin;
