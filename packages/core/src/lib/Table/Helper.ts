export function paginate(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = 10,
    maxPages: number = 10,
): number[] {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    let startPage: number;
    let endPage: number;
    if (totalPages <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
    } else {
        // total pages more than max so calculate start and end pages
        const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        } else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }

    // create an array of pages to ng-repeat in the pager control
    const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
        (i) => startPage + i,
    );

    // return object with all pager properties required by the view
    return pages;
}

export function getInnerText(obj: any) {
    let buf = '';
    if (obj === null) return null;
    if (obj) {
        const type = typeof obj;
        if (type === 'string' || type === 'number') {
            buf += obj;
        } else if (type === 'object') {
            let children = null;
            if (Array.isArray(obj)) {
                children = obj;
            } else {
                const props = obj.props;
                if (props) {
                    children = props.children;
                }
            }
            if (children) {
                if (Array.isArray(children)) {
                    children.forEach((o) => {
                        buf += getInnerText(o);
                    });
                } else {
                    buf += getInnerText(children);
                }
            }
        }
    }
    return buf;
}
