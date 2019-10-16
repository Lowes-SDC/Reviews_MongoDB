import React  from 'react'
import {makeStyles} from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Ratings from './Ratings'

export default function ProductInfo(props) {

const useStyles = makeStyles(theme => ({
    root: {
        width:'100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));



const classes = useStyles();
const [expanded,setExpanded] = React.useState(false);

const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel: false);
}


    return (
        <div className={classes.root}>
           <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
               <ExpansionPanelSummary
               expandIcon={<ExpandMoreIcon/>}
               aria-controls="panel2bh-content"
               id="panel2bh-header">
                   <Typography className={classes.heading}>Description</Typography>


               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
               <Typography className={classes.secondaryHeading}>{props.data.name} </Typography>
                <Typography>
                         {props.data.description}
                    </Typography>
               </ExpansionPanelDetails>
        </ExpansionPanel>
           <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel3bh-header"
                >
                    <Typography className={classes.heading}>Specifications</Typography>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
                    </Typography>
                </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                    <Typography className={classes.heading}>Ratings & Reviews</Typography>

            </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                   <Ratings productId={props.data.id}/>
                </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel3bh-header"
                        >
                    <Typography className={classes.heading}>Community Q & A</Typography>

            </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
                    </Typography>
                </ExpansionPanelDetails>
      </ExpansionPanel>

        </div>
    )
}

