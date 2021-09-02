module.exports = {
  jwtSecret: process.env.JWT_SECRET || '78a87bcc-8ea0-465b-8676-21dc3990f72b',
  jwt: {
    expiresIn: "2y",
  }
};