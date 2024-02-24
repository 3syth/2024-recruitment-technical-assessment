import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';


const CourseCard = (props) => {
  const cardStyle = {
    width: '400px',
    height: '200px',
    margin: '30px 0px',
    filter: 'drop-shadow(0px 14px 10px #ccc)'
  }

  return (
    <Card sx={cardStyle}>
      <CardActionArea sx={{height: '100%'}}>
        <CardContent>
          <Box sx={{
            height: '160px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
          }}>
            <Box sx={{display: 'flex',
              justifyContent:'space-between',
              alignItems:'flex-start'}}
            >
              <Typography gutterBottom variant="h5" sx={{fontWeight: 'bold'}}>
                {props.coursePrefix + props.courseCode}
              </Typography>
              <Box>
                <Rating defaultValue={0} value={props.averageStars} readOnly='true'/>
                <Box style={{color: '#9A9A9A'}}>
                  {props.totalReviews} reviews
                </Box>
              </Box>
            </Box>
            <Typography variant="h6" color="text.secondary">
              {props.courseTitle}
            </Typography>
            <Box sx={{display: 'flex',
              alignItems:'flex-start'}}
            >
              {props.offeredTerms.map((term) => (
                <div style={{
                  backgroundColor: '#CCEBF6',
                  borderRadius: '15px',
                  margin: '5px',
                  padding: '8px'
                }}>
                  {term}
                </div>
              ))}
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CourseCard