const {Router} = require('express')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')
const router = Router()

router.post(
    '/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'min length of password 6 char ')
        .isLength({min: 6})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data'
            })
        }

        const {email, password} = req.body

        const candidate = await User.findOne({email})

        if(candidate) {
           return res.status(400).json({message: 'User exist'})
        }

        const hashedPassword = await bcrypt.hash(password, 7)
        const user = new User({
            email,
            password: hashedPassword
        })

        await user.save()

        res.status(201).json({message: 'User has been created'})

    } catch (e) {
        res.status(500).json({message: 'Try again later'})
    }
})

router.post(
    '/login', 
    [
        check('email', 'Enter correct email')
        .normalizeEmail().isEmail(),
        check('password', 'Enter password').exists()
    ], 
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data'
            })
        }

        const {email, password} = req.body
        const user = await User.findOne({email})

        if(!user) {
            return res.status(400).json({message: 'User not found'})
        }

        const isMath = await bcrypt.compare(password, user.password)
        
        if(!isMath) {
            return res.status(400).json({message: 'Password mismatch'})
        }

        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})
        
    } catch (e) {
        res.status(500).json({message: 'Try again later'})
    }
})


module.exports = router