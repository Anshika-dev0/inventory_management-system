const authorizeRole = (...roles) => {
    return(req,res,next) => {
        console.log("Role Middleware");
    console.log("User:",req.user);
    console.log("Allowed Roles:",roles);
        if (! 
        roles.includes(req.user.role)) {
            return res.status(403).json({
                message:"Access Denied"
            });
        }
        console.log("Passes Role Check");
        next();
    };
};
module.exports = authorizeRole;