import jwtVerify from '../helper/jwt_verify.js';

export default  function jwtVerifyController(req, res) {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ valid: false, message: 'Token required' });
    }

    const result =  jwtVerify(token);
    if (result?.userId) {
        return res.status(200).json({ valid: true, message: 'Token is valid', data: result });
    } else {
        return res.status(401).json({ valid: false, message: 'Invalid or expired token' });
    }
}
