import { obtainToken } from "../utilis/obtainTokenFromHeader.js";
import { verifyToken } from "../utilis/verifyToken.js";


// Authenticate JWT token
export const authenticateToken = async (req, res, next) => {
  const token = obtainToken(req);
  const userDecoded = verifyToken(token);

  req.userAuth = userDecoded.id;

  if (!userDecoded) {
    return res.json({
      status: "error",
      message: "kindly login because the token is either expired or invalid",
    });
  } else {
    next();
  }
};