-- CreateTable
CREATE TABLE "share" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "users_id" INTEGER NOT NULL,
    "file_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "expires_at" TEXT NOT NULL,

    CONSTRAINT "share_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "share" ADD CONSTRAINT "share_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "share" ADD CONSTRAINT "share_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "files"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
