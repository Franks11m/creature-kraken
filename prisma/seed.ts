/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy creatures
  const post1 = await prisma.kraken.create({
    data: {
        name: 'KrakenPrime',
        description: 'Se alimenta de crustaceos y animales del mar.',
        lastSee: 'Salinas',
        countLastSee: 3,
        extinct: false,
    },
  });
  const post2 = await prisma.kraken.upsert({
    where: { name: 'Don Tentaculos' },
    update: {},
    create: {
      name: 'Don Tentaculos',
      description: 'Monstruo marino que se esconde en las profundidades del océano y de vez en cuando, asciende a la superficie para hundir barcos con sus poderosos tentáculos.',
      lastSee: 'Jambeli',
      countLastSee: 1,
      extinct: false,
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
