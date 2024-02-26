import {
    Button,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
} from '@mui/material';
import { useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { MuiIcon } from '@/components/MuiIcon/MuiIcon';

type IActionsCellProps = {
    row: any;
    showEdit?: boolean;
    showView?: boolean;
    showDelete?: boolean;
    onEdit?: (args: { item: any }) => void;
    onView?: (args: { item: any }) => void;
    onDelete?: (args: { item: any }) => void;
};

export const ActionsCell = ({
    row,
    showEdit = true,
    showView = true,
    showDelete = true,

    onEdit = () => {},
    onView = () => {},
    onDelete = () => {},
}: IActionsCellProps) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button onClick={handleClick}>
                <MuiIcon icon="MoreVert" />
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {showView && (
                    <MenuItem
                        onClick={(e) => {
                            handleClose();
                            onView({ item: row });
                        }}
                    >
                        <ListItemIcon>
                            <VisibilityIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Ver</ListItemText>
                    </MenuItem>
                )}
                {showEdit && (
                    <MenuItem
                        onClick={(e) => {
                            handleClose();
                            onEdit({ item: row });
                        }}
                    >
                        <ListItemIcon>
                            <EditIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Editar</ListItemText>
                    </MenuItem>
                )}
                {showDelete && (
                    <MenuItem
                        onClick={(e) => {
                            handleClose();
                            onDelete({ item: row });
                        }}
                    >
                        <ListItemIcon>
                            <DeleteIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Eliminar</ListItemText>
                    </MenuItem>
                )}
            </Menu>
        </>
    );
};
