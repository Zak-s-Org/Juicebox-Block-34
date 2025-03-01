function requireUser(req, res, next) {
  if (!req.user) {
    res.status(401).send({
      message: "You must be logged in to perform this action",
    });
  } else {
    next();
  }
}

module.exports = {
  requireUser,
};