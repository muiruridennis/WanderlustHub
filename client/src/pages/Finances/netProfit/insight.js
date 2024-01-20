
import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Paper,
    IconButton,
    Button,
    Card,
    CardContent,
    Modal,
    Stack
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Insight = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [editedNote, setEditedNote] = useState(''); // Separate state for edited note
    const [editingNoteIndex, setEditingNoteIndex] = useState(-1);
    const [editModalOpen, setEditModalOpen] = useState(false);

    const handleAddNote = () => {
        if (newNote.trim() !== '') {
            const timestamp = new Date().toISOString();
            const updatedNotes = [...notes, { text: newNote, timestamp }];
            setNotes(updatedNotes);
            setNewNote('');
            // setEditModalOpen(false); // Close the modal after adding note
        }
    };
    const handleEditNote = (index) => {
        setEditingNoteIndex(index);
        setEditedNote(notes[index].text); // Set the content of the modal's ReactQuill
        setEditModalOpen(true);
    };

    const handleSaveEditedNote = () => {
        const updatedNotes = [...notes];
        updatedNotes[editingNoteIndex].text = editedNote;
        setNotes(updatedNotes);
        setEditingNoteIndex(-1);
        setEditModalOpen(false); // Close the modal after saving
    };



    return (
        <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" sx={{margin:2}}>Notes or Insights</Typography >
            <ReactQuill value={newNote} onChange={setNewNote} theme="snow" />
            <Button variant="contained" onClick={handleAddNote} sx={{margin:2}}>
                Add Note
            </Button>
            <Grid container spacing={2}>
                {notes.map((note, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1">
                                    <div dangerouslySetInnerHTML={{ __html: note.text }} />
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {new Date(note.timestamp).toLocaleString()}
                                </Typography>
                                <IconButton onClick={() => handleEditNote(index)}>
                                    <EditIcon />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Modal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        width: '80%',
                        maxWidth: 600,
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Edit Note
                    </Typography>
                    <ReactQuill
                        value={editedNote} // Use the content of the note being edited
                        onChange={setEditedNote} // Update the content of the edited note
                        theme="snow"
                    />

                    <Stack direction="row" spacing={2} sx={{ marginTop: 3 }}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleSaveEditedNote}
                        >
                            Save
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            color='inherit'
                            onClick={() => setEditModalOpen(false)}
                        >
                            Cancel
                        </Button>
                    </Stack>


                </Box>
            </Modal>
        </Paper>
    );
};

export default Insight;
