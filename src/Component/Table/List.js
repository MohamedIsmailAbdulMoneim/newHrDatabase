import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

export default function CheckboxList({ data }) {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {data.map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <>
                        <label class="container">One
                            <input type="checkbox" checked="checked" />
                                <span class="checkmark"></span>
                        </label>
                        <label class="container">Two
                            <input type="checkbox" />
                                <span class="checkmark"></span>
                        </label>
                        <label class="container">Three
                            <input type="checkbox" />
                                <span class="checkmark"></span>
                        </label>
                        <label class="container">Four
                            <input type="checkbox" />
                                <span class="checkmark"></span>
                        </label>
                    </>
                );
            })}
        </List>
    );
}
