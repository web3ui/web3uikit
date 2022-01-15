import React from 'react';
export interface TableProps {
    columnsConfig: string;

    header: React.ReactNode[] | string[];

    data: React.ReactNode[] | string[];

    pageSize: number;

    maxPages?: number;

    noPagination?: boolean;
}
