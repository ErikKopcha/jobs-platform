import { HOME_SCREEN_OPTIONS } from '@src/screens/Home/constants';
import { DetailJob, Home } from '@src/screens';
import { DETAIL_JOB_SCREEN_OPTIONS } from '@src/screens/DetailJob/constants';
import React from 'react';

interface IROUTE_CONFIG {
  name: string;
  component: () => React.ReactElement;
  options: any;
}

export const ROUTE_CONFIG = [
  {
    name: 'Home',
    component: Home,
    options: HOME_SCREEN_OPTIONS,
  },
  {
    name: 'Job Details',
    component: DetailJob,
    options: DETAIL_JOB_SCREEN_OPTIONS,
  },
] as IROUTE_CONFIG[];
