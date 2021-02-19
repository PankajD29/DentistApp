import React from "react";
// @material-ui/core components
import { makeStyles,withStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import {Grid,Typography,InputLabel,IconButton,Table,TableBody,TextField,TableCell,TableHead,TablePagination,TableRow,LinearProgress,Box} from '@material-ui/core';
import tablestyle from "assets/jss/material-dashboard-react/components/tableStyle.js"


class Test extends React.Component{
  constructor(){
    super();
    this.state = {
      isModal:false,
      patientList: [
        {
          pid:1,
          date:"13/02/2021",
          name:"Pankaj Dhumal",
          gender:"male",
          age:28,
          address:"Satara",
          mobile:"9423906818",
          email:"pankaj.dhumal29@gmail.com",
          medical_history:"none",
          show:"view"
        },
        {
          pid:2,
          date:"13/02/2021",
          name:"Onkar Ugale",
          gender:"male",
          age:28,
          address:"Satara",
          mobile:"9423906818",
          email:"onkar.ugale@gmail.com",
          medical_history:"none",
          show:"view"
        },
        {
          pid:2,
          date:"13/02/2021",
          name:"Abhijeet Sarje",
          gender:"male",
          age:28,
          address:"Satara",
          mobile:"9423906818",
          email:"abhijeet.sarje@gmail.com",
          medical_history:"none",
          show:"view"
        },
        {
          pid:4,
          date:"13/02/2021",
          name:"Vijay Sarje",
          gender:"male",
          age:28,
          address:"Satara",
          mobile:"9423906818",
          email:"vijay.sarje@gmail.com",
          medical_history:"none",
          show:"view"
        },
        {
          pid:5,
          date:"13/02/2021",
          name:"Chetak Tenali",
          gender:"male",
          age:28,
          address:"Satara",
          mobile:"9423906818",
          email:"chetak.tenali@gmail.com",
          medical_history:"none",
          show:"view"
        }
      ]
    };
  }
  componentDidMount(){

  }
  handleModalClose = () => {
      this.setState({
        isModal : false
      }, () => {
        return(this.state.isModal)
      })
    }

viewModal(data){
      this.setState({
        isModal : true
      }, () => {
      })
    }

  render(){
    const {classes:classess}=this.props;
    return(
      <div>
      <Dialog fullwidth maxWidth ='sm'
      open={this.state.isModal}
      >
      <div style={{ overFlow:"hidden"}}>
      <Card>
      <CardHeader style={{padding:"0px",marginTop:"-30px"}}>
      <DialogTitle className={classess.primaryTableHeader} style={{ color:'white',fontSize:'18px',height:"24px"}}
      id="customized-dialog-title" onClose={this.handleModalClose}>
             <div align="center" style={{fontWeight:'bold',marginTop:"-45px"}}>
             Patient Details:
             </div>
             </DialogTitle>
      <CustomIconButton title="Close" onClick={this.handleModalClose}>
       </CustomIconButton>
      </CardHeader>
      <CardBody>
      <Grid container spacing={1}>
               {this.state.patientList[0].pid?<Grid item xs={6}>
                 <span style={{fontWeight:'bold'}}>PID :</span> {this.state.patientList[0].pid}
               </Grid>:null}
               {this.state.patientList[0].date?<Grid item xs={6}>
                 <span style={{fontWeight:'bold'}}>Date :</span> {this.state.patientList[0].date}
               </Grid>:null}
               {this.state.patientList[0].name?<Grid item xs={6}>
                 <span style={{fontWeight:'bold'}}>Name :</span> {this.state.patientList[0].name}
               </Grid>:null}
               {this.state.patientList[0].gender?<Grid item xs={6}>
                 <span style={{fontWeight:'bold'}}>Gender :</span> {this.state.patientList[0].gender}
               </Grid>:null}
               {this.state.patientList[0].age? <Grid item xs={6}>
                  <span style={{fontWeight:'bold'}}>Age :</span> {this.state.patientList[0].age}
                </Grid>:null}
                {this.state.patientList[0].address?<Grid item xs={6}>
                  <span style={{fontWeight:'bold'}}>Address :</span> {this.state.patientList[0].address}
                </Grid>:null}
                {this.state.patientList[0].status?<Grid item xs={6}>
                  <span style={{fontWeight:'bold'}}>Mobile :</span> {this.state.patientList[0].mobile}
                </Grid>:null}
                {this.state.patientList[0].email?<Grid item xs={6}>
                  <span style={{fontWeight:'bold'}}>Email :</span> {this.state.patientList[0].email}
                </Grid>:null}
                {this.state.patientList[0].medical_history?<Grid item xs={6}>
                  <span style={{fontWeight:'bold'}}>Medical History :</span>                                {this.state.patientList[0].medical_history}
                </Grid>:null}
               </Grid>
      </CardBody>
      </Card>
      </div>
      </Dialog>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            {/* <Card style={{marginTop:'-30px',marginLeft:'-15px',width:'103%'}}>
              <CardHeader align="center" style={{fontWeight:'bold',backgroundColor: 'skyblue'}}>Patient List</CardHeader>
            </Card> */}
          </GridItem>
          <div className={classess.tableResponsive} style={{marginTop:'-20px',marginLeft:'15px'}}>
            <Table className={classess.table} >
              <TableHead className={classess.primaryTableHeader} style={{fontWeight:'bold'}}>
                <TableRow className={classess.tableBodyRow}>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell + " "+ classess.tableHeadCell}>Show</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell + " "+ classess.tableHeadCell}>PID</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell + " "+ classess.tableHeadCell}>Date</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell + " "+ classess.tableHeadCell}>Name</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell + " "+ classess.tableHeadCell}>Gender</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell + " "+ classess.tableHeadCell}>Age</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell + " "+ classess.tableHeadCell}>Address</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell + " "+ classess.tableHeadCell}>Mobile</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell + " "+ classess.tableHeadCell}>Email</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell + " "+ classess.tableHeadCell}>Medical-History</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
          {this.state.patientList.map((row) => (
            <TableRow key={row.pid}>
              <TableCell align="center" className={classess.tableCell + " "+ classess.tableHeadCell}><IconButton onClick={()=>this.viewModal()}><VisibilityIcon></VisibilityIcon></IconButton></TableCell>
              <TableCell component="th" scope="row">
                {row.pid}
              </TableCell>
              <TableCell align="center" className={classess.tableCell + " "+ classess.tableHeadCell}>{row.date}</TableCell>
              <TableCell align="center" className={classess.tableCell + " "+ classess.tableHeadCell}>{row.name}</TableCell>
              <TableCell align="center" className={classess.tableCell + " "+ classess.tableHeadCell}>{row.gender}</TableCell>
              <TableCell align="center" className={classess.tableCell + " "+ classess.tableHeadCell}>{row.age}</TableCell>
              <TableCell align="center" className={classess.tableCell + " "+ classess.tableHeadCell}>{row.address}</TableCell>
              <TableCell align="center" className={classess.tableCell + " "+ classess.tableHeadCell}>{row.mobile}</TableCell>
              <TableCell align="center" className={classess.tableCell + " "+ classess.tableHeadCell}>{row.email}</TableCell>
              <TableCell align="center" className={classess.tableCell + " "+ classess.tableHeadCell}>{row.medical_history}</TableCell>
            </TableRow>
          ))}
        </TableBody>
            </Table>
          </div>
        </GridContainer>
      </div>
    );
  }

}

const styles = (theme) => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  tableClasses:{
    border: '6px solid #d4d8da',overflowX:'auto'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    marginTop:"-35px",
    color:'white',
    marginRight:"-15px"
  }
});

const CustomIconButton = withStyles((theme) => ({
root: {
  float:"right",
  color:"black",
  },
}))(IconButton);

const DialogTitle = withStyles(styles)((props) => {
const { children, classes, onClose, ...other } = props;
return (
<MuiDialogTitle disableTypography className={classes.root} {...other}>
  <Typography>{children}</Typography>
  {onClose ? (
    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
      <CloseIcon />
    </IconButton>
  ) : <div>sdasd</div>}
</MuiDialogTitle>
);
});

export default withStyles(tablestyle,{ withTheme:true})(Test);
