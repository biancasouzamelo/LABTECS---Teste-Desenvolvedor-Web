
/*Os usuários e senhas devem conter os seguintes dados: 
Login: root
password: 123 */

create database adonis;

CREATE TABLE `users` (
  `email` varchar(200) NOT NULL,
  `password` varchar(500) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

select *from users;