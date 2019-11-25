API used for the PPE3 project during BTS SIO2 2019/2020

Every route starts with `IP:3000/api/`

Allows __cross-origin resource sharing__

Using **Knex** and **ObjectionJS** to manage DB and Models

To launch as docker project use :

`docker run -d -p 0.0.0.0:52080:3000 --name SafiAPI -v "$PWD":/usr/src/app -w /usr/src/app node:8 node index.js`
