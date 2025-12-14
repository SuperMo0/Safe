/*
  Warnings:

  - Added the required column `usersId` to the `files` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "files" ADD COLUMN     "usersId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
