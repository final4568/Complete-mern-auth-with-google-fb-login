
const router = require('express').Router()
const userController = require('../controllers/userCotroller')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.post('/register', userController.register)
router.post('/activation', userController.activateEmail)
router.post('/login', userController.login)
router.post('/refresh_token', userController.getAccessToken)
router.post('/forgot', userController.forgotPassword)
router.post('/reset', auth, userController.resetPassword)
router.get('/infor', auth, userController.getUserInfor)
router.get('/all_infor', auth, authAdmin, userController.getUsersAllInfor)
router.get('/logout', userController.logout)
router.patch('/update', auth, userController.updateUser)
router.patch('/update_role/:id', auth, authAdmin, userController.updateUsersRole)
router.delete('/delete/:id', auth, authAdmin, userController.deleteUser)


router.post('/googlelogin', userController.googleLogin)
router.post('/facebooklogin', userController.facebookLogin)

module.exports = router