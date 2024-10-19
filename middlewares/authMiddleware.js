const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


// NOTE : it will only work with users route and signin and signup facility available .
// Possible through the frontend only...
// Till then , I just pass it without authentication... IN LINE 10.. !!IMPORTANT
const authenticateToken = (req, res, next) => {
  return  next()
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ success: false, message: 'Access Denied' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(403).json({ success: false, message: 'Invalid Token' });
    }
};

module.exports = {authenticateToken}