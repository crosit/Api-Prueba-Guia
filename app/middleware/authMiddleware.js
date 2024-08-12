const { verifyToken } = require("../services/authService");

const authenticateToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  const user = verifyToken(token);
  if (!user) return res.sendStatus(401);

  req.user = user;
  next();
};
const authorizeRoles = (roles) => {
  return (req, res, next) => {
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.sendStatus(401);

    const user = verifyToken(token);

    if (!user) return res.sendStatus(401);
    if (roles.length && !roles.includes(user.role)) {
        return res.status(403).json({ message: 'Forbidden: You do not have access to this resource' });
      }
    req.user = user;
    next();
  };
};

module.exports = { authenticateToken, authorizeRoles };
