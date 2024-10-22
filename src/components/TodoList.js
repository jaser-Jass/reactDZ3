import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <Box sx={{ maxWidth: 400, margin: '0 auto', marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>
                Список Дел
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <TextField
                    label="Новая задача"
                    variant="outlined"
                    value={task}
                    onChange={handleInputChange}
                    sx={{ flexGrow: 1, marginRight: 1 }}
                />
                <Button variant="contained" color="primary" onClick={handleAddTask}>
                    Добавить
                </Button>
            </Box>
            <List>
                {tasks.map((task, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={task} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default TodoList;