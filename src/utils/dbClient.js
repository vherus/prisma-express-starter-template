const { PrismaClient } = require("@prisma/client")

const dbClient = new PrismaClient()

module.exports = dbClient;