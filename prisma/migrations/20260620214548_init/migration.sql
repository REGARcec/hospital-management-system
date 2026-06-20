-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'PATIENT',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Pasien" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "telepon" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Dokter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "spesialis" TEXT NOT NULL,
    "jadwal" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Poli" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "namaPoli" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Obat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "namaObat" TEXT NOT NULL,
    "stok" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Kamar" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomor" TEXT NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "RekamMedis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pasienId" INTEGER NOT NULL,
    "dokterId" INTEGER NOT NULL,
    "diagnosa" TEXT NOT NULL,
    "resep" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RekamMedis_pasienId_fkey" FOREIGN KEY ("pasienId") REFERENCES "Pasien" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RekamMedis_dokterId_fkey" FOREIGN KEY ("dokterId") REFERENCES "Dokter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pasien_nik_key" ON "Pasien"("nik");
