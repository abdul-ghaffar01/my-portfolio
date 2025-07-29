import jwt from 'jsonwebtoken';
export default  function jwtVerify(token) {
    if (!token) {
        console.log('❌ No token provided');
        return {};
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (err) {
        console.log(err)
        return {};
    }
}