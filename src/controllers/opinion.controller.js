"use strict";
const Opinion = require("../models/opinion.model");
exports.findAll = function (req, res) {
	Opinion.findAll(function (err, opinion) {
		console.log("controller");
		if (err) res.send(err);
		console.log("res", opinion);
		res.send(opinion);
	});
};
exports.create = function (req, res) {
	const new_opinion = new Opinion(req.body);
	//handles null error
	if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
		res.status(400).send({ error: true, message: "Please provide all required field" });
	} else {
		Opinion.create(new_opinion, function (err, opinion) {
			if (err) res.send(err);
			res.json({ error: false, message: "Opinion added successfully!", data: opinion });
		});
	}
};
exports.findById = function (req, res) {
	Opinion.findById(req.params.id, function (err, opinion) {
		if (err) res.send(err);
		res.json(opinion);
	});
};
exports.update = function (req, res) {
	if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
		res.status(400).send({ error: true, message: "Please provide all required field" });
	} else {
		Opinion.update(req.params.id, new Opinion(req.body), function (err, opinion) {
			if (err) res.send(err);
			res.json({ error: false, message: "Opinion successfully updated" });
		});
	}
};
exports.delete = function (req, res) {
	Opinion.delete(req.params.id, function (err, opinion) {
		if (err) res.send(err);
		res.json({ error: false, message: "Opinion successfully deleted" });
	});
};
