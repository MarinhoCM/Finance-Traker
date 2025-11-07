export interface IExpenseResponse {
    id: number;
    description?: string | null;
    value: number;
    deadline: Date;
    created_at: Date;
    updated_at: Date;
    statusId: number;
    userId: number;
    tagId: number;
    status: {
        description: string;
    },
    tag: {
        description: string;
    }
}