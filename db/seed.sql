INSERT INTO burgers (burger_name) VALUES ('Cheese Burger');
INSERT INTO burgers (burger_name) VALUES ('Big MAC');
INSERT INTO burgers (burger_name) VALUES ('Turkey Burger');
INSERT INTO burgers (burger_name) VALUES ('Bacon Burger');

UPDATE burgers SET burger_name='Veggi Burger' WHERE id=2;

UPDATE burgers SET devoured=true WHERE id=2;

SELECT * FROM burgers;

