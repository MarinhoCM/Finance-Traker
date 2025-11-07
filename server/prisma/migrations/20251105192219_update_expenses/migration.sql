/*
  Warnings:

  - Added the required column `range_days` to the `recurring_earnings` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_recurring_earnings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recurring" TEXT NOT NULL,
    "range_days" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "earningsId" INTEGER NOT NULL,
    CONSTRAINT "recurring_earnings_earningsId_fkey" FOREIGN KEY ("earningsId") REFERENCES "earnings" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_recurring_earnings" ("active", "created_at", "earningsId", "id", "recurring", "updated_at") SELECT "active", "created_at", "earningsId", "id", "recurring", "updated_at" FROM "recurring_earnings";
DROP TABLE "recurring_earnings";
ALTER TABLE "new_recurring_earnings" RENAME TO "recurring_earnings";
CREATE UNIQUE INDEX "recurring_earnings_id_key" ON "recurring_earnings"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
