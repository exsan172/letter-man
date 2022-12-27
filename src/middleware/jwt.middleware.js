import jwt from "jsonwebtoken";
import config from "../configs/index.js";

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        return config.response(res, 403, "A token is required for authentication")
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;

    } catch (err) {
        return config.response(res, 401, "Invalid Token")
    }

    return next();
};

export default verifyToken