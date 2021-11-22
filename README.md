## Setup

*Pre-requisite: Create a new database instance in ElephantSQL!*

1. Fork this repository

2. Clone your forked version to your local machine

3. Run `npm i` to install dependencies

4. Rename `.env.example` to `.env`

5. Fill in the values in `.env` to point to your database & shadow DB

6. Run `npx prisma migrate dev --name init`

7. Run `npm start`
