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
import {Typography,InputLabel,IconButton,Table,TableBody,TextField,TableCell,TableHead,TablePagination,TableRow,LinearProgress,Box} from '@material-ui/core';
import tablestyle from "assets/jss/material-dashboard-react/components/tableStyle.js"


class Test extends React.Component{
  constructor(){
    super();
    this.state = {
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
  render(){
    const {classes:classess}=this.props;
    return(
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            {/* <Card style={{marginTop:'-30px',marginLeft:'-15px',width:'103%'}}>
              <CardHeader align="center" style={{fontWeight:'bold',backgroundColor: 'skyblue'}}>Patient List</CardHeader>
            </Card> */}
          </GridItem>
          <div className={classess.tableResponsive} style={{marginTop:'-20px',marginLeft:'15px'}}>
            <Table className={classess.table} >
              <TableHead className={classess.primaryTableHeader} style={{fontWeight:'bold',backgroundColor: '#99b3ff'}}>
                <TableRow className={classess.tableBodyRow}>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell}>Show</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell}>PID</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell}>Date</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell}>Name</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell}>Gender</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell}>Age</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell}>Address</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell}>Mobile</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell}>Email</TableCell>
                  <TableCell align="center" style={{fontWeight:'bold'}} className={classess.tableCell}>Medical-History</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
          {this.state.patientList.map((row) => (
            <TableRow key={row.pid}>
              <TableCell align="center"><VisibilityIcon></VisibilityIcon></TableCell>
              <TableCell component="th" scope="row">
                {row.pid}
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.mobile}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.medical_history}</TableCell>
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

export default withStyles(tablestyle,{ withTheme:true})(Test);
