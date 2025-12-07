import { useState, useMemo } from 'react';
import type { Product } from '../api';

type SortField = 'default' | 'title' | 'price';
type SortOrder = 'asc' | 'desc';

interface UseSortProductsReturn {
    sortedProducts: Product[];
    sortBy: (field: SortField) => void;
    sortField: SortField;
    sortOrder: SortOrder;
    setSortOrder: (order: SortOrder) => void;
}

export function useSortProducts(products: Product[] = []): UseSortProductsReturn {
    const [sortField, setSortField] = useState<SortField>('default');
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

    const sortedProducts = useMemo(() => {
        if (sortField === 'default') return products;

        return [...products].sort((a, b) => {
            const aVal = a[sortField];
            const bVal = b[sortField];

            if (typeof aVal === 'string' && typeof bVal === 'string') {
                const comparison = aVal.localeCompare(bVal);
                return sortOrder === 'asc' ? comparison : -comparison;
            }

            if (typeof aVal === 'number' && typeof bVal === 'number') {
                return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
            }

            return 0;
        });
    }, [products, sortField, sortOrder]);

    const sortBy = (field: SortField) => {
        if (sortField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortOrder('asc');
        }
    };

    return {
        sortedProducts,
        sortBy,
        sortField,
        sortOrder,
        setSortOrder,
    };
}