// id          Int        @id @unique @default(autoincrement())
// description String
// active
// created_at  DateTime   @default(now())
// updated_at  DateTime   @updatedAt
// expenses    expenses[]

export type CreateStatusType = {
    description: string;
}