import React from 'react';
import Sidebar from './components/Sidebar';
import SearchModal from './components/SearchModal';
import Sortbar from './components/Sortbar';
import CourseCard from './components/CourseCard';

import courseData from './courses.json';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function App() {
  const [courses, setCourses] = React.useState([]);
  const [titleColour, setTitleColour] = React.useState('#1479F2');

  const colours = [
    '#9b5de5',
    '#f15bb5',
    '#fee440',
    '#00bbf9',
    '#00f5d4',
    '#1479F2',
  ]

  const changeColour = () => {
    let randomColour = titleColour;
    while (randomColour === titleColour) {
      let index = Math.floor(Math.random() * colours.length);
      randomColour = colours[index];
    }
    setTitleColour(randomColour);
  }

  React.useEffect(() => {
    const newCourses = courseData;
    setCourses(newCourses);
  }, [])

  return (
    <div>
      <Sidebar/>
      <Box sx={{margin: '30px 200px 30px 235px'}}>
        <Box sx={{marginBottom: '30px'}}>
          <Typography variant='h5'>Devsoc presents</Typography>
          <Typography variant='h1' sx={{cursor: 'pointer', fontWeight: 'bold', color: titleColour}} onClick={changeColour}>
            unilectives
          </Typography>
          <Typography variant='h5' sx={{fontWeight: 'bold'}}>
            Your one-stop shop for UNSW course and elective reviews.
          </Typography>
        </Box>

        <SearchModal/>
        <Sortbar/>
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
        >
          {courses.map((course) => (
            <CourseCard
              coursePrefix={course.course_prefix}
              courseCode={course.course_code}
              courseTitle={course.course_title}
              averageStars={course.average_stars}
              totalReviews={course.total_reviews}
              offeredTerms={course.offered_terms}
            />
          ))}
        </Box>
      </Box>

    </div>
  );
}

export default App;
