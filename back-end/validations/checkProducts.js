const checkText = (req, res, next) => {
    const { name, description, category, image} = req.body;
    if (name && description && category && image) {
        next();
    } else {
        res.status(400).json({ error: "text is required" });
    }
}

const checkInteger = (req, res, next) => {
    const { price, rating } = req.body;
    if (typeof price === "number" && typeof rating === "number") {
        next();
    } else {
        res.status(400).json({ error: "number is required" });
    }
}

module.exports = {
    checkText,
    checkInteger
}