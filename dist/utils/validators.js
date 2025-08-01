import { body, validationResult } from "express-validator";
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
const loginValidator = [
    body("email").trim().isEmail().withMessage("Invalid email format"),
    body("password").trim().isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
];
const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator,
];
export const chatCompletionValidator = [
    body("message").notEmpty().withMessage("Message is required"),
];
//export const chatValidator = validate(chatCompletionValidator);
export default loginValidator;
export { validate, signupValidator };
//# sourceMappingURL=validators.js.map