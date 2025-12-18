/*
  Warnings:

  - You are about to drop the column `storage_name` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `files` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "files" DROP COLUMN "storage_name",
DROP COLUMN "url",
ADD COLUMN     "path" TEXT;
