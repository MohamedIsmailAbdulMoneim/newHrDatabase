import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({pagesLength, handleChange}) {
  return (
    <Stack spacing={2} margin={'auto'} >
      <Pagination onChange={handleChange}  count={pagesLength} color="success" />
    </Stack>
  );
}