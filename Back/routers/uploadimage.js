const router = require('express').Router()
const uploadImage = require('../middleware/uploadImage')
const profilImages = require('../controllers/UserImage')
const auth = require('../middleware/auth')

router.post('/upload_avatar', uploadImage, auth, profilImages.uploadAvatar)

module.exports = router