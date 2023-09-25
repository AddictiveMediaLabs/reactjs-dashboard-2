import React from 'react';
import '../assets/css/App.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicSelect from '../components/Select';
import ListingCard from '../components/ListingCard';
import { listingData } from '../data/listingData';
import Grid from '@mui/material/Grid';







function App() {
  return (

    <>
      <Box component="div" className='analytics-section'>
        <Box component="div" className='border-bg' >

          
          <Box component="div" className="day-selection-box justify-between" container spacing={3} sx={{
            display: 'flex',
          }}>
            <Box component="div" item xs={12}>
              <Typography variant="h4">
                Rummy App Analytics
              </Typography>
            </Box>
            <Box component="div" item xs={12}>
              <BasicSelect />
            </Box>
          </Box>


         {/* card listing started */}

         <Box component="ul" className='card-listing flex-box align-center'>
         {listingData.map((item, index) => (
              <ListingCard
                key={index}
                label={<p dangerouslySetInnerHTML={{ __html: item.label }} />}
                value={item.value}
              />
            ))}
          </Box>


          {/* top 5 listings  */}

          <Grid container spacing={2} columns={16} mt={4}>
            <Grid item xs={8}>
              <Box>
                <Typography variant="h4">
                  Top 5 Universities By User Count
                </Typography>



              </Box>
            </Grid>

            <Grid item xs={8}>
              <Box>
                <Typography variant="h4">
                  Top 5 Sellers
                </Typography>



              </Box>
            </Grid>

          </Grid>


          </Box>


        </Box>
     


    

    </>
 
  );
}

export default App;
