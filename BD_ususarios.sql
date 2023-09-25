show databases;
drop database if exists usuarios;
create database usuarios;
use usuarios;

CREATE TABLE usuarios (
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50),
correo VARCHAR(50),
telefono VARCHAR(20),
contraseña VARCHAR(20)
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
INSERT INTO usuarios (nombre, correo, telefono, contraseña) VALUES
('Luis González', 'luis@email.com', '1234567890', 'pass123'),
('María Rodríguez', 'maria@email.com', '9876543210', 'password456'),
('Alejandro Pérez', 'alejandro@email.com', '5555555555', 'secreto789'),
('Sofía Martínez', 'sofia@email.com', '7777777777', 'clave2023'),
('Daniel Sánchez', 'daniel@email.com', '9999999999', 'mysecret123'),
('Laura Fernández', 'laura@email.com', '1111111111', 'mypassword'),
('Carlos Ramírez', 'carlos@email.com', '2222222222', '12345'),
('Patricia López', 'patricia@email.com', '3333333333', 'mypw321'),
('Javier Torres', 'javier@email.com', '4444444444', 'secure123'),
('Marta Ruiz', 'marta@email.com', '5555555555', 'password1234'),
('Roberto Santos', 'roberto@email.com', '6666666666', 'mypassword567'),
('Isabel García', 'isabel@email.com', '7777777777', 'pass5678'),
('Andrés Fernández', 'andres@email.com', '8888888888', 'secret456'),
('Carmen López', 'carmen@email.com', '9999999999', 'password567'),
('Manuel Torres', 'manuel@email.com', '1010101010', 'mypassword789'),
('Natalia Pérez', 'natalia@email.com', '1111111111', 'secret7890'),
('Pablo Martínez', 'pablo@email.com', '1212121212', 'pass7890'),
('Rosa Ramírez', 'rosa@email.com', '1313131313', 'mypassword890'),
('Sergio Rodríguez', 'sergio@email.com', '1414141414', 'secure789'),
('Victoria Ruiz', 'victoria@email.com', '1515151515', 'password890');





INSERT INTO opiniones (usuario_id, nota, opinion, compraVerificada) VALUES
(1, 5, 'Gran producto, muy satisfecho con la compra.', 1),
(2, 4, 'Buena calidad, aunque el envío fue un poco lento.', 1),
(3, 3, 'El producto es aceptable, pero podría mejorar.', 0),
(4, 2, 'No quedé satisfecho con el producto, no cumplió mis expectativas.', 1),
(5, 5, '¡Este producto es asombroso! Lo recomiendo completamente.', 1),
(6, 4, 'Muy buena relación calidad-precio.', 1),
(7, 5, 'El envío fue rápido y el producto es excelente.', 1),
(8, 3, 'Es un producto decente, pero esperaba más.', 1),
(9, 2, 'No me gustó, no lo recomiendo.', 1),
(10, 4, '¡Fantástico! Cumplió mis expectativas.', 1),
(11, 5, 'Increíble, no esperaba tanto por este precio.', 1),
(12, 4, 'Buen producto en general, aunque podría mejorar en algunos aspectos.', 1),
(13, 3, 'Cumple su función, pero no es excepcional.', 1),
(14, 2, 'Mejoraría algunas características del producto.', 1),
(15, 5, 'Recomiendo este producto a todos, excelente calidad.', 1),
(16, 4, 'La relación calidad-precio es muy buena.', 1),
(17, 5, 'Muy contento con mi compra, el producto es genial.', 1),
(18, 3, 'Aceptable, pero podría ser mejor.', 1),
(19, 2, 'No cumplió mis expectativas, esperaba más.', 1),
(20, 4, 'Buen producto, estoy satisfecho con mi compra.', 1);


select * from usuarios;
select * from opiniones join usuarios on usuarios.id = opiniones.usuario_id;