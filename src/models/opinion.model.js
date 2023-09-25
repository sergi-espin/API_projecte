"use strict";
var dbConn = require("../../config/db.config");
//Opinion object create
var Opinion = function (opinion) {
	this.usuario_id = opinion.usuario_id;
	this.nota = opinion.nota;
	this.opinion = opinion.opinion;
	this.compraVerificada = opinion.compraVerificada;
};
Opinion.create = function (newFab, result) {
	dbConn.query("INSERT INTO opiniones set ?", newFab, function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(err, null);
		} else {
			console.log(res.insertId);
			result(null, res.insertId);
		}
	});
};
Opinion.findById = function (id, result) {
	dbConn.query("Select * from opiniones where id = ? ", id, function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(err, null);
		} else {
			result(null, res);
		}
	});
};
Opinion.findAll = function (result) {
	dbConn.query("SELECT u.id AS usuario_id, u.nombre AS nombre_usuario, u.correo AS correo_usuario, o.nota, o.opinion, o.compraVerificada FROM usuarios u JOIN opiniones o ON u.id = o.usuario_id;", function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(null, err);
		} else {
			console.log("opiniones : ", res);
			result(null, res);
		}
	});
};
Opinion.update = function (id, opinion, result) {
	dbConn.query(
		"UPDATE opiniones SET usuario_id=?,nota=?,opinion=?,compraVerificada=? WHERE id = ?",
		[opinion.usuario_id, opinion.nota, opinion.opinion, opinion.compraVerificada, id],
		function (err, res) {
			if (err) {
				console.log("error: ", err);
				result(null, err);
			} else {
				result(null, res);
			}
		}
	);
};
Opinion.delete = function (id, result) {
	dbConn.query("DELETE FROM opiniones WHERE id = ?", [id], function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(null, err);
		} else {
			result(null, res);
		}
	});
};
module.exports = Opinion;
