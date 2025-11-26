export const adminMiddleware = (req, res, next) => {
  try {
    if (req.user && req.user.role === "admin") {
      next();
      return res.status(403).json({ ok: false, msg: "Acceso denegado" });
    }
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Internal server error" });
  }
};
