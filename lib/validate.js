import validator from 'express-validator';
import queries from './../db/queries.js';



let mwEmail = validator.body('email').trim().notEmpty().isEmail({ domain_specific_validation: true }).isLength({ max: 50 }).withMessage('not a valid email').custom(async (email, meta) => {
    let res = await queries.checkIfUserExist(email);
    if (res) throw new Error;
}).withMessage('User already Exists with this email');

let mwPassword = validator.body('password').trim().notEmpty().withMessage('Password should not be empty');
let mwconfirm_password = validator.body('confirm_password').custom((input, meta) => {
    const req = meta.req;
    return req.body.password == req.body.confirm_password;
}).withMessage("Passwords don't match");

let validateNewUser = [mwEmail, mwPassword, mwconfirm_password];

export default { validateNewUser }

