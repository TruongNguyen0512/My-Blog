

const errorHandler = (err, req, res, next) => {
    const status = err.status || 500; // Sử dụng 500 làm mặc định nếu không có mã trạng thái
    const message = err.message || 'Internal Server Error'; // Sử dụng thông điệp mặc định nếu không có thông điệp lỗi
    res.status(status).json({ message });
};

module.exports = {errorHandler}