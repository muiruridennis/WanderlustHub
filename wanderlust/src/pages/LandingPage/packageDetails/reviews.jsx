import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Sample data structure for reviews
const sampleReviews = [
    { id: 1, text: 'Review 1', rating: 4.5 },
    { id: 2, text: 'Review 2', rating: 5.0 },
    // Add more reviews as needed
];

function Reviews() {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Reviews
            </Typography>
            {/* Display a list of reviews */}
            <ul>
                {sampleReviews.map((review) => (
                    <li key={review.id}>
                        <Typography variant="body1">{review.text}</Typography>
                        {/* You can add a rating component here */}
                        <Typography variant="caption">{`Rating: ${review.rating}`}</Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default Reviews;
