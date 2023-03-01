import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddCareer from './AddCareer';

export default function Home() {
  return (
    <>
        <Navbar/>
        <AddCareer/>
    </>
  )
}
