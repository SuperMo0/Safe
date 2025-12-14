
import prisma from "../db/queries.js";
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import queries from "../db/queries.js";



function renderSignup(req, res) {
    res.render('signup');
}

function renderLogin(req, res) {
    res.render('login');
}

function renderHome(req, res) {
    console.log(req);

    if (req.user) res.render('home');
    else res.redirect('/login');
}

async function handleNewUser(req, res) {
    let data = req.body;
    let validationResults = validationResult(req);
    if (!validationResults.isEmpty()) { res.render('signup', { errors: validationResults.array }); return };
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 10);
    try {
        await queries.insertUser(user);
        user = await queries.getUserByEmail(user.email);
        req.login(user, (e) => {
            if (e) throw e;
            res.redirect('/');
        });

    } catch (error) {
        res.render('signup', { errors: error });
    }
}


export default { renderHome, renderLogin, renderSignup, handleNewUser };