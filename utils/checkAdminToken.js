import jwt from "jsonwebtoken";

export const isTokenValid = (token) => {
  if (!token) return false;

  try {
    // Decode token without verifying signature
    const decoded = jwt.decode(token);

    if (!decoded || !decoded.exp) return false;

    // Check expiry (exp is in seconds)
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }
};
