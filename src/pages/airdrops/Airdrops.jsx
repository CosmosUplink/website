import {Grid, Typography, Link, Box} from '@mui/material'
import Background from '../../components/Background'
import Footer from '../../components/Footer'
import AppBar from '../../components/AppBar'
import { useDemoData } from '@mui/x-data-grid-generator';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import LanguageIcon from '@mui/icons-material/Language';
import { useTheme } from '@mui/styles';
import OnePageLayout from '../../components/OnePageLayout'

import {firebase, firestore} from './../../firebase'
import { collection, getDocs } from "firebase/firestore"; 
import {useEffect, useState} from 'react'



const columns = [
	{
		field: "id",
		hide:true,
	},
	{ 
		field: "project",
		headerName: "Project",
		width: 150, 
		renderCell: ({value}) => (
			<Grid item><Link variant='button' href={value.website} target="_blank" rel="noopener noreferrer" >{value.project}</Link></Grid>
		),
	},
	{ 
		field: "snapshotDate", 
		headerName: "Snapshot",
		width: 150, 
		renderCell: ({value}) => (
			<Typography>
				{value}
			</Typography>
		),
	},
	{ 
		field: "airdropDate",
		headerName: "Airdrop",
		width: 150, renderCell: ({value}) => (
			<Typography>
				{value}
			</Typography>
		),
	},

	{
		field: "details",
		headerName: 'Details',
		width: 280,
		renderCell: ({value}) => (
			<Grid container alignItems='center' justifyContent='space-between'>
				{value.announcement && <Grid item><Link variant='button' href={value.announcement} target="_blank" rel="noopener noreferrer">Announcement</Link></Grid>}
				{value.check && <Grid item><Link variant='button' href={value.check} target="_blank" rel="noopener noreferrer">Check</Link></Grid>}
				{value.claim && <Grid item><Link variant='button' href={value.claim} target="_blank" rel="noopener noreferrer">Claim</Link></Grid>}
			</Grid>
			)
	},
	{ 
		field: "description",
		 headerName: "Description",
		 width: 700,
	},
];

export default () => {
	const theme = useTheme()
    const styles = {
    	dataGrid: {
    		height: '75vh',
    		width: '100%',
    		backgroundColor: theme.palette.background.default,
    	},
    	link: {
        textDecoration: 'none',
        fontSize: theme.typography.h6.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
        letterSpacing: theme.typography.h6.letterSpacing,
    	},
    }

		const [airdrops, setAirdrops]=useState([])
		var tmp= []
		const fetchAirdrops = async () => {
			tmp = await getDocs(collection(firestore, "airdrops"));
			tmp = tmp.docs.map((e, i) => {
				e = e.data()
				

				e = {
					id: i,
					project: {
						project: e.Project,
						website: e.WebsiteLink,
					},
					description: e.Description,
					snapshotDate: e.SnapshotDate,
					airdropDate: e.AirdropDate,
					details: {
						announcement: e.AnnouncementLink,
						check: e.CheckLink,
						claim: e.ClaimLink,	
					},
				}


				return e
			})
			setAirdrops(tmp)
	}
		
		useEffect(() => {
			fetchAirdrops();
		}, [])

    return (
     	<OnePageLayout>
     		<Grid container justifyContent='center'>
     			<Grid item xs={12}>
          	<Box style={styles.dataGrid}>
            	<DataGrid rows={airdrops} columns={columns}/>
          	</Box>
          </Grid>
          <Grid style={{marginTop: 20}}>
          	<Link href='https://docs.google.com/forms/d/e/1FAIpQLScOJAVsWmqYptqyV0bnbPaY0sLAH_MXiqnzIs211RkZnhTAWQ/viewform' style={styles.link} target="_blank" rel="noopener noreferrer">Submit Airdrop</Link>
        	</Grid>
        </Grid>
      </OnePageLayout>      
)
  }

