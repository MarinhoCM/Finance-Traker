-- CreateTable
CREATE TABLE "recurring_expenses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recurring" TEXT NOT NULL DEFAULT 'DAILY',
    "range_days" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "expensesId" INTEGER NOT NULL,
    CONSTRAINT "recurring_expenses_expensesId_fkey" FOREIGN KEY ("expensesId") REFERENCES "expenses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "recurring_expenses_id_key" ON "recurring_expenses"("id");
