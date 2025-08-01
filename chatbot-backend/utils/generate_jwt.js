import jwt from 'jsonwebtoken';

const payload = {};  // empty payload

const token = jwt.sign(payload, process.env.JWT_SECRET_BOT);

console.log("Generated Token:", token);
