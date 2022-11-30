import React from 'react';
import { ITableNewProps } from '../types';
import styles from './styles';
import Loader from './Loader';
import NoData from './NoData';

type TTableProps = Pick<
    ITableNewProps,
    | 'header'
    | 'noPagination'
    | 'pageSize'
    | 'customLoadingContent'
    | 'customNoDataComponent'
    | 'customNoDataText'
    | 'isLoading'
    | 'tableBackgroundColor'
>;

interface ITableProps extends TTableProps {
    pageNum: number;
    tableData: (React.ReactNode | string)[][];
}

const { TableStyled } = styles;
const TableBase: React.FC<ITableProps> = ({
    customLoadingContent,
    customNoDataComponent,
    customNoDataText,
    header,
    isLoading,
    noPagination,
    pageNum,
    pageSize,
    tableData,
    tableBackgroundColor,
}) => {
    const computeCurrentData = (): (string | React.ReactNode)[][] => {
        if (noPagination) {
            return tableData;
        }
        const from = pageNum * pageSize;
        const to = from + pageSize;
        return tableData?.slice(from, to);
    };

    const RenderBody = (): JSX.Element => {
        if (tableData && computeCurrentData().length == 0) {
            return (
                <NoData
                    customNoDataComponent={customNoDataComponent}
                    customNoDataText={customNoDataText}
                />
            );
        }
        return (
            <tbody>
                {isLoading ? (
                    <Loader customLoadingContent={customLoadingContent} />
                ) : (
                    computeCurrentData().map((row) => (
                        <tr>
                            {row.map((element) => (
                                <td>{element}</td>
                            ))}
                        </tr>
                    ))
                )}
            </tbody>
        );
    };

    return (
        <TableStyled tableBackgroundColor={tableBackgroundColor}>
            <thead>
                <tr>
                    {header.map((head) => (
                        <th>{head}</th>
                    ))}
                </tr>
            </thead>
            <RenderBody />
        </TableStyled>
    );
};

export default TableBase;
