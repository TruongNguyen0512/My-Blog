const jwt = require('jsonwebtoken')

const authenticateUser = (req,res,next) =>{
    const token = req.cookies.token  

    if(!token) {
        throw new Error('Unauthorized - User not logged in')
    }
    try {
        // Xác thực token và lấy dữ liệu giải mã (payload)
        const decodedToken = jwt.verify(token, 'nádhaskhdkjas');
        
        // Lưu trữ thông tin người dùng từ payload vào req để sử dụng trong các route handler tiếp theo (nếu cần)
        req.user = decodedToken;
        console.log(decodedToken)
        // Chuyển điều khiển đến middleware hoặc route handler tiếp theo
        next();
    } catch (err) {
        // Xử lý lỗi nếu token không hợp lệ
        console.error(err);
        next(err)
    }
}

module.exports =  {authenticateUser}