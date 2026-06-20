const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const passwordHash = bcrypt.hashSync('Password123!', 10);

  // Clear existing data
  await prisma.user.deleteMany({});
  await prisma.poli.deleteMany({});
  await prisma.obat.deleteMany({});
  await prisma.kamar.deleteMany({});

  // Create users
  await prisma.user.createMany({
    data: [
      { name: 'Admin Rumah Sakit', email: 'admin@hospital.com', password: passwordHash, role: 'ADMIN' },
      { name: 'Dokter Spesialis', email: 'dokter@hospital.com', password: passwordHash, role: 'DOCTOR' },
      { name: 'Pasien Contoh', email: 'pasien@hospital.com', password: passwordHash, role: 'PATIENT' },
    ],
  });

  // Create poli
  await prisma.poli.createMany({
    data: [
      { namaPoli: 'Poli Anak' },
      { namaPoli: 'Poli Jantung' },
      { namaPoli: 'Poli Gigi' },
    ],
  });

  // Create obat
  await prisma.obat.createMany({
    data: [
      { namaObat: 'Paracetamol', stok: 120 },
      { namaObat: 'Amoksisilin', stok: 80 },
      { namaObat: 'Vitamin C', stok: 200 },
    ],
  });

  // Create kamar
  await prisma.kamar.createMany({
    data: [
      { nomor: '101', status: 'Tersedia' },
      { nomor: '102', status: 'Terisi' },
      { nomor: '103', status: 'Perawatan' },
    ],
  });

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
