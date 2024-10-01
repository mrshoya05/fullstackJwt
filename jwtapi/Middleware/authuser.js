const jwt = require('jsonwebtoken');


 const verifyToken = async(req, res, next)=> {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);
  
    jwt.verify(token, process.env.JWT_SEC_KEY, (err, decoded) => {
      if (err) return res.sendStatus(403);
      req.userId = decoded.id;
      next();
    });
  }


  module.exports = verifyToken;