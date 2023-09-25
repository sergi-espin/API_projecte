"use strict";
var dbConn = require("../../config/db.config");
//Usuario object create
var Usuario = function (usuario) {
	this.nombre = usuario.nombre;
	this.correo = usuario.correo;
	this.telefono = usuario.telefono;
	this.contraseña = usuario.contraseña;
};
Usuario.create = function (newPro, result) {
	dbConn.query("INSERT INTO usuarios set ?", newPro, function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(err, null);
		} else {
			console.log(res.insertId);
			result(null, res.insertId);
		}
	});
};
Usuario.findById = function (id, result) {
	dbConn.query("Select * from usuarios where id = ? ", id, function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(err, null);
		} else {
			result(null, res);
		}
	});
};
Usuario.findAll = function (result) {
	dbConn.query("Select * from usuarios", function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(null, err);
		} else {
			console.log("usuarios : ", res);
			result(null, res);
		}
	});
};
Usuario.update = function (id, usuario, result) {
	dbConn.query(
		"UPDATE usuarios SET nombre=?,correo=?,telefono=?,contraseña=? WHERE id = ?",
		[usuario.nombre, usuario.correo, usuario.telefono, usuario.contraseña, id],
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
Usuario.delete = function (id, result) {
	dbConn.query("DELETE FROM usuarios WHERE id = ?", [id], function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(null, err);
		} else {
			result(null, res);
		}
	});
};
module.exports = Usuario;
