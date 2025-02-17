'use client';
// react
import React from 'react';

// mui
import { Typography, Grid, Box, Stack, Container } from '@mui/material';

// component
import CompaginCard from 'src/components/cards/compagin';

// api
import * as api from 'src/services';
import { useQuery } from 'react-query';

export default function CompaignPage() {
  const { data, isLoading } = useQuery(['get-home-compaign-all'], () => api.getHomeCompaigns());
  return (
    <Container maxWidth="xl">
      <Stack
        direction={'column'}
        sx={{
          gap: 3,
          my: 5
        }}
      >
        <Box>
          <Typography variant="h2" color="text.primary" textAlign="center">
            All Compaigns
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
          Don't miss the chance to catch best deals and offers from Shop that we bring in every week.Friday that launches you into a lifetime of bliss, where you can get awesome discounts on a wide range of products and services. 
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {(isLoading ? Array.from(new Array(5)) : data?.data)?.map((inner) => (
              <React.Fragment key={Math.random()}>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <CompaginCard compaign={inner} isLoading={isLoading} />
                </Grid>
              </React.Fragment>
            ))}
            {!Boolean(data?.data.length) && (
              <Typography variant="h3" color="error.main" textAlign="center">
                Compaigns not found
              </Typography>
            )}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
