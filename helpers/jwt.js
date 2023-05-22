const jwt = require('jsonwebtoken');


function createJwt(payload) {
const jwtToken = jwt.sign(payload, process.env.JWT_SECRETKEY, {expiresIn: "1 day"})
return jwtToken
};

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRETKEY)
}


module.exports = {
  createJwt,
  verifyToken
};