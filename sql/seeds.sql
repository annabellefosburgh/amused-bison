-- Seeding into the department table --
INSERT INTO department (name)
   VALUE ('Barista');
INSERT INTO department(name)
    VALUE ('Shift Lead');
INSERT INTO department(name)
    VALUE ('Trainee');

-- Seeding into the role table --
INSERT INTO role (title, salary, department_id)
    VALUE ('Lead Barista', 30000, 1);
INSERT INTO role (title, salary, department_id)
    VALUE ('Barista', 27000, 1);   
INSERT INTO role (title, salary, department_id)
    VALUE ('Morning Shift Lead', 35000, 2);
INSERT INTO role (title, salary, department_id)
    VALUE ('Evening Shift Lead', 35000, 2);
INSERT INTO role (title, salary, department_id)
    VALUE ('Part Time Trainee', 22000, 3);
INSERT INTO role (title, salary, department_id)
    VALUE ('Full Time Trainee', 24000, 3);

-- Seeding into the employee table -- 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUE (Andrea, Smith, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUE (Ashley, Ferguson, 5, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUE (Dylan, Whittle, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUE (Michael, Watson, 2, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUE (Josephine, Yang, 3);
