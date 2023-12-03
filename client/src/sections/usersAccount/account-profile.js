import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Modal,
    Typography
} from '@mui/material';



export const AccountProfile = ({ editing, handleEditToggle, currentUser }) => {
    const [user, setUser] = useState(currentUser)
    const [selectedOption, setSelectedOption] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsModalOpen(true);
    };

    const handleAvatarClick = () => {
        if (editing) {
            setSelectedOption(null);
        } else {
            setSelectedOption('view');
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedOption(null);
        setIsModalOpen(false);
    };
    const handleUploadImage = (event) => {
        const file = event.target.files[0]; // Get the selected file
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']; // Allowed image file types
        const maxSize = 5 * 1024 * 1024; // Maximum file size in bytes (5MB in this example)
      
        // Check if the selected file is an image and within the allowed file types and size
        if (file && allowedTypes.includes(file.type) && file.size <= maxSize) {
          // Perform the image upload here (e.g., dispatch an action to upload the image)
          console.log('Image uploaded successfully!');
          // Update the user object with the new avatar
          setUser({ ...user, avatar: URL.createObjectURL(file) });
        } else {
          // Display an error message or provide feedback to the user
          console.error('Invalid file. Please select a valid image (JPEG, PNG, or GIF) up to 5MB in size.');
        }
      
        handleCloseModal();
      };
      

    const handleDeleteProfile = () => {
        // Handle the delete profile action
        // Reset the user object to default values using a copy
        const updatedUser = { ...user, avatar: null };
        setUser(updatedUser);
        // Close the modal after the deletion process
        setIsModalOpen(false);
    };

    return (
        <>
            <Card>
                <CardContent>
                    <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                        {/* Make the Avatar clickable */}
                        <Button onClick={handleAvatarClick} sx={{ cursor: 'pointer' }}>
                            <Avatar src={user?.avatar} sx={{ height: 80, mb: 2, width: 80 }} />
                        </Button>
                        <Typography gutterBottom variant="h5">
                            {`${user.name}`}
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                            {user.city} {user.country}
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                            {user.timezone}
                        </Typography>
                    </Box>
                </CardContent>
                <Divider />
                <CardActions>
                    {editing ? (
                        <>
                            <Button fullWidth variant="text" onClick={handleEditToggle}>
                                Cancel
                            </Button>
                            <Button fullWidth variant="contained" color="primary" onClick={""}>
                                Save Profile
                            </Button>
                        </>
                    ) : (
                        <Button fullWidth variant="text" color="primary" onClick={handleEditToggle}>
                            Edit Profile
                        </Button>
                    )}
                </CardActions>
            </Card>

            {/* Modal */}
            {isModalOpen && (
                <Modal
                    open={isModalOpen}
                    onClose={handleCloseModal}
                >
                    <Box sx={{ width: 300, backgroundColor: '#fff', padding: 2, margin: 'auto', mt: '30vh' }}>
                        {selectedOption ? (
                            <>
                                {selectedOption === 'view' && (
                                    <>
                                        {user.avatar === null ? <Typography variant='button'>Please upload a profile Picture</Typography> :
                                            <>
                                                <img
                                                    src={uploadedImage || user.avatar}
                                                    alt="Profile Avatar"
                                                    style={{ height: "auto", width: 270, borderRadius: '50%' }}
                                                />
                                                <Typography gutterBottom variant="h6">
                                                    {user.name}'s Profile Picture
                                                </Typography>
                                            </>
                                        }
                                        {/* <img src={user.avatar} alt="..." style={{ width: "270px", height: "auto", borderRadius: "050%" }} /> */}
                                        <Button fullWidth variant="text" onClick={handleCloseModal}>
                                            Close
                                        </Button>
                                    </>
                                )}
                                {editing && selectedOption === 'upload' && (
                                    <>
                                        <Typography gutterBottom variant="h6">
                                            Upload New Profile Picture
                                        </Typography>
                                        {/* Add file input here for image upload */}
                                        <Button fullWidth variant="text" onClick={handleCloseModal}>
                                            Cancel
                                        </Button>
                                        {/* <Button fullWidth variant="contained" color="primary" onClick={handleUploadImage}>
                      Upload
                    </Button> */}
                                        <input type="file" accept="image/*" onChange={handleUploadImage} />

                                    </>
                                )}
                                {editing && selectedOption === 'remove' && (
                                    <>
                                        <Typography gutterBottom variant="h6">
                                            Remove Profile Picture
                                        </Typography>
                                        <Typography gutterBottom variant="body2">
                                            Are you sure you want to remove your profile picture?
                                        </Typography>
                                        <Button fullWidth variant="text" onClick={handleCloseModal}>
                                            Cancel
                                        </Button>
                                        <Button fullWidth variant="contained" color="secondary" onClick={handleDeleteProfile}>
                                            Remove
                                        </Button>
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                <Typography gutterBottom variant="h6">
                                    {user.name}'s Profile Picture
                                </Typography>
                                <Button fullWidth variant="text" onClick={() => handleOptionClick('view')}>
                                    View Profile Picture
                                </Button>
                                {editing && (
                                    <>
                                        <Button fullWidth variant="text" onClick={() => handleOptionClick('upload')}>
                                            Upload Profile Picture
                                        </Button>
                                        <Button fullWidth variant="text" onClick={() => handleOptionClick('remove')}>
                                            Remove Profile Picture
                                        </Button>
                                    </>
                                )}
                            </>
                        )}
                    </Box>
                </Modal>
            )}
        </>
    );
};



