show databases;
drop database if exists usuarios;
create database usuarios;
use usuarios;

CREATE TABLE usuarios (
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50),
correo VARCHAR(50),
telefono VARCHAR(10),
contraseña VARCHAR(10)
);

CREATE TABLE opiniones ( 
id INT PRIMARY KEY AUTO_INCREMENT,
usuario_id INT,
nota INT,
opinion VARCHAR(1000),
compraVerificada BOOL,
CONSTRAINT chk_mi_columna_range CHECK (nota >= 1 AND nota <= 5),
FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

show tables;
INSERT INTO usuarios (nombre, correo, telefono, contraseña)
VALUES ('Juan Pérez', 'juan@example.com', '1234567890','12345');
INSERT INTO usuarios (nombre, correo, telefono, contraseña)
VALUES ('María González', 'maria@example.com', '9876543210','54321');


INSERT INTO opiniones (usuario_id, nota, opinion, compraVerificada)
VALUES (2, 4, 'Muy buen producto. Lo recomiendo.', TRUE);
INSERT INTO opiniones (usuario_id, nota, opinion, compraVerificada)
VALUES (1, 2, 'No me gustó el producto. No lo recomendaría.', FALSE);
select * from usuarios;
select * from opiniones join usuarios on usuarios.id = opiniones.usuario_id;