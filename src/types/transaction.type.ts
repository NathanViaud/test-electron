import { z } from 'zod';

export const categories = ['food', 'housing', 'transportation', 'entertainment'] as const;
const categoriesEnum = Object.fromEntries(categories.map(category => [category, category]));
export type Category = typeof categories[number];

export interface Transaction {
    type: 'deposit' | 'withdrawal';
    amount: number;
    category: Category;
    date: Date;
    description: string;
}

export const TransactionSchema = z.object({
    type: z.union([z.literal('deposit'), z.literal('withdrawal')]),
    amount: z.number(),
    category: z.nativeEnum(categoriesEnum),
    date: z.date(),
    description: z.string()
})