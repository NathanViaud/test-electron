import { Transaction, TransactionSchema } from './types';

export function validateForm(form: any) {
    const result = TransactionSchema.safeParse(form);
    
    if(form.date > new Date()) return false;
    if(form.amount < 0) return false;
    
    return result.success;
}