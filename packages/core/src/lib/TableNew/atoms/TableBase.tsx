import React from 'react';
import { ITableNewProps } from '../types';
import styles from './styles';

type TTableProps = Pick<ITableNewProps, 'header' | 'noPagination' | 'pageSize'>;

interface ITableProps extends TTableProps {
    pageNum: number;
    tableData: (React.ReactNode | string)[][];
}

const { TableStyled } = styles;
const TableBase: React.FC<ITableProps> = ({
    header,
    tableData,
    pageNum,
    pageSize,
    noPagination,
}) => {
    const computeCurrentData = (): (string | React.ReactNode)[][] => {
        if (noPagination) {
            return tableData;
        }
        const from = pageNum * pageSize;
        const to = from + pageSize;
        return tableData?.slice(from, to);
    };

    return (
        <TableStyled>
            <thead>
                <tr>
                    {header.map((head) => (
                        <th>{head}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {computeCurrentData().map((row) => (
                    <tr>
                        {row.map((element) => (
                            <td>{element}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </TableStyled>
    );
};

export default TableBase;
