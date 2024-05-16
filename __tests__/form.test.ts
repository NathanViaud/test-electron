import type { Transaction } from '../src/types';
import { validateForm } from '../src/renderer';

describe('Form Validation', () => {
    const validTransaction: Transaction = {
        type: 'deposit',
        amount: 100,
        category: 'food',
        date: new Date(),
        description: 'Groceries'
    };

    test('should return true for valid Transaction', () => {
        expect(validateForm(validTransaction)).toBe(true);
    });

    it('should return false for invalid Transaction type', () => {
        const invalidTransaction = { ...validTransaction, type: 'invalid' };

        expect(validateForm(invalidTransaction)).toBe(false);
    });

    it('should return false for negative Transaction amount', () => {
        const invalidTransaction = { ...validTransaction, amount: -100 };

        expect(validateForm(invalidTransaction)).toBe(false);
    });

    it('should return false for invalid Transaction amount', () => {
        const invalidTransaction = { ...validTransaction, amount: '100' };

        expect(validateForm(invalidTransaction)).toBe(false);
    });

    it('should return false for invalid Transaction category', () => {
        const invalidTransaction = { ...validTransaction, category: 'invalid' };

        expect(validateForm(invalidTransaction)).toBe(false);
    });

    it('should return false for invalid Transaction date', () => {
        const invalidTransaction = { ...validTransaction, date: 'invalid' };

        expect(validateForm(invalidTransaction)).toBe(false);
    });

    it('should return false for future Transaction date', () => {
        const invalidTransaction = { ...validTransaction, date: new Date(Date.now() + 1000) };

        expect(validateForm(invalidTransaction)).toBe(false);
    });

    it('should return false for empty Transaction description', () => {
        const invalidTransaction = { ...validTransaction, description: 123 };

        expect(validateForm(invalidTransaction)).toBe(false);
    });
})