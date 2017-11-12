const express = require('express');
const Favorite = require('../models/Movie');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => cb(null, '../view/public/uploads/'),
	filename: (req, file, cb) => {
		const mimeType = file.mimetype.split("/");
    const extension = mimeType[mimeType.length - 1];
		cb(null, file.fieldname + '-' + Date.now() + '.' + extension)
	}
})

const upload = multer({ storage: storage })
const router = express.Router();


router.post('/favorites/new', upload.single('poster_path'), (req, res) => {
	const newFavorite = new Favorite(req.body);
	newFavorite.poster_path = req.file.filename;

	newFavorite.save(err => {
		if (err) return console.log(err);
		res.json({"newFavorite" : "Movie successfully added to favorite"})
	})
});

router.get('/favorites', (req, res) => {
	Favorite.find({}, (err, favorites) => {
		if (err) return res.send(err);

		res.json(favorites);
	})
})

module.exports = router;