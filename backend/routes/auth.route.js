import express from 'express'
import { signup, signin } from '../controllers/auth.controller.js';

const router = express.Router();

/* http://localhost:4000/auth/... */

/*
    body: {
        username, 
        email, 
        password,
    }
*/
router.post('/signup', signup)

/*
    body: {
        username, 
        password,
    }
*/
router.post('/signin', signin)


export default router;