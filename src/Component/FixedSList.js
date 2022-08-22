import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

import List from './Table/List'

function renderRow(props) {
  const { index, style, data } = props;
  const newStyle = {...style, backgroundColor: 'white'}
  return (
      <input type="checkbox"/>
  );
}

export default function VirtualizedList({items}) {
  return (

      <FixedSizeList
      height={300}
      itemCount={items.length}
      itemSize={30}
      width={300}
      itemData={items}
      >
        {renderRow}
      </FixedSizeList>
  );
}