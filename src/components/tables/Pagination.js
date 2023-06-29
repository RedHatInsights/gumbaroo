import React from 'react';
import { Pagination } from '@patternfly/react-core';

export default function PaginationTop({ page, perPage, onSetPage, onPerPageSelect, itemCount}) {
    return (
        <Pagination
            itemCount={itemCount}
            perPage={perPage}
            page={page}
            onSetPage={onSetPage}
            widgetId="pagination-options"
            onPerPageSelect={onPerPageSelect}
            isCompact
            style={ { display: 'inline-block', float: 'right' } }
        />
    );
}