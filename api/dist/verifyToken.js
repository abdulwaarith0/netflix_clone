"use strict";

var jwt = require("jsonwebtoken");
var getJwtToken = function getJwtToken(req) {
  var _req$header$replace, _req$header;
  var token = null;
  if (req.cookies && req.cookies["token"]) token = req.cookies["token"];else token = (_req$header$replace = (_req$header = req.header("Authorization")) === null || _req$header === void 0 ? void 0 : _req$header.replace("Bearer ", "")) !== null && _req$header$replace !== void 0 ? _req$header$replace : null;
  return token;
};
function verify(req, res, next) {
  try {
    var token = getJwtToken(req);
    if (!token) {
      throw new Error();
    }
    var decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json("You are not authorized!");
  }
}
module.exports = verify;