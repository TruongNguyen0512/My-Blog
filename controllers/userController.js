const User  = require('../models/User') 

// getUser 
const getUser = async (req,res,next) =>{
    try {
        const user = await User.findById(req.params.id)
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'The user with the provided ID was not found' });
        }
    } catch (err) {
        console.log(err)
        next(err)
    }

}

// update  user  

const updateUser = async (req, res, next) => {
    const userId = req.params.id; // Lấy userId từ đường dẫn URL
    const updateFields = req.body; // Lấy các trường cần cập nhật từ body của yêu cầu

    try {
        // Kiểm tra xem người dùng có tồn tại không
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Cập nhật các trường thông tin của người dùng
        Object.assign(user, updateFields);

        // Lưu người dùng đã cập nhật vào cơ sở dữ liệu
        const updatedUser = await user.save();

        // Trả về thông tin người dùng đã được cập nhật
        res.status(200).json(updatedUser);
    } catch (err) {
        // Xử lý lỗi nếu có bất kỳ lỗi nào xảy ra
        console.error(err);
        next(err);
    }
};

// const delete user 


const deleteUser = async (req, res, next) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if (deleteUser) {
            res.status(200).json({ message: 'User has been deleted!' });
        } else {
            res.status(404).json({ message: 'User not found!' });
        }
    } catch (err) {
        next(err);
    }
};

module.exports ={getUser,updateUser,deleteUser} 

