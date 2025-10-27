import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, username: user.username, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" } 
  );
};

export function verifyToken(token) {
  return new Promise((resolve) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) resolve({verified:false});
      else resolve({verified:true,data:decode});
    });
  });
}
