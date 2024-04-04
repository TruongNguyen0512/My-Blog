const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Register = async (req, res,next) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: 'This email is already used' });
        }
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(req.body.password, salt);

        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        next(err)
    }
}

const Login = async (req,res,next) =>{
    try {
        const registeredUser = await User.findOne({email:req.body.email})
        if(!registeredUser) {
            throw new Error('Hey ! You typed wrong email ')
        }else {
            const truePassword  = bcrypt.compareSync(req.body.password,registeredUser.password)
                if(truePassword){
                    const token = jwt.sign({ userId: registeredUser._id }, 'nádhaskhdkjas', { expiresIn: '1h' });

                    // Gửi JWT dưới dạng cookie về cho client
                    res.cookie('token', token, { httpOnly: true }).status(201).json({message:'Login Successfull'});
                }else{
                    throw new Error('Wong Password !Please enter password again !')
                }
        }
    } catch (err) {
        console.log(err)
        next(err)        
    }
}

module.exports = { Register,Login };
