const fs = require(`fs`);
let stars;

fs.readFile('./data/storage.json',  function(err, contents) {
    if(!err){
    	stars = JSON.parse(contents)
    }
});

exports.get = function (req, res ) {
  return res.status(200).send(stars);
}

exports.getId = (req, res ) => {
	let star = stars.find(function(elem){
		console.log(req.params)
		return elem.id === Number(req.params.id)
	});
	console.log(star)
	if(star){
		res.status(200).send(star);
	}else{
		res.status(404).send({ message : `Musician has been not found.`});
	}
};

exports.post = (req, res ) => {
	let newStar = {
		"id": stars.length + 1,
		"name": req.body.name, 
		"band": req.body.band, 
		"instrument": req.body.instrument 
	}

	let star = stars.find(function(elem){
		return elem.name === req.body.name && 
					 elem.band === req.body.band && 
					 elem.instrument === req.body.instrument
	});

	if(star){
		res.status(409).send({ message : `Musician already exist.`});
	}else if(!req.body.name || !req.body.band || !req.body.instrument){
		res.sendStatus(400);
	}else{
		stars.push(newStar);
		res.status(201).send(newStar)
	}
};

exports.put = (req, res ) => {
	let star = stars.find(function(elem){
		return elem.id === Number(req.params.id)
	});
	
	if(!star){
		res.status(404).send({ message : `Musician has been not found.`});
	}else if(!req.body.name || !req.body.band || !req.body.instrument){
		res.sendStatus(400);
	}else{

		star.name = req.body.name, 
		star.band = req.body.band, 
		star.instrument = req.body.instrument 

		res.status(200).send(star)
	}
};

exports.delete = (req, res ) => {
	let star = stars.find(function(elem){
		return elem.id === Number(req.params.id)
	});
	
	if(!star){
		res.send({ message : `Musician has been not found`}).status(404);
	}else{
		let starIndex = stars.indexOf(star);
		stars.splice(starIndex, 1);
		res.status(200).send({ message : "Musician has been successfully removed."})
	}
};