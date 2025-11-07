
//   id           Int        @id @unique @default(autoincrement())
//   name         String
//   passwd       String
//   created_at   DateTime   @default(now())
//   updated_at   DateTime   @updatedAt
//   last_session DateTime   @updatedAt
//   expenses     expenses[]
//   earnings     earnings[]

export type CreateUserType = {
    name: string;
    passwd: string;
}   