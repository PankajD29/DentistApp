import {
    warningColor,
    primaryColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
    defaultFont
  } from "assets/jss/material-dashboard-react.js";
  
  const tableStyle = theme => ({
    warningTableHeader: {
      color: warningColor[0]
    },
    primaryTableHeader: {
      color:"#ffffff",
      background: "#9931b1"
    },
    secondaryTableHeader: {
      color:"#ffffff",
      background: "#e91e63"
    },
    dangerTableHeader: {
      color: dangerColor[0]
    },
    successTableHeader: {
      color: successColor[0]
    },
    infoTableHeader: {
      color: infoColor[0]
    },
    roseTableHeader: {
      color: roseColor[0]
    },
    grayTableHeader: {
      color: grayColor[0]
    },
    table: {
      marginBottom: "0",
      width: "100%",
      maxWidth: "100%",
      backgroundColor: "#FFFFFF",
      borderSpacing: "0",
      borderCollapse: "collapse",
    },
    tableHeadCell: {
      color: "inherit",
      ...defaultFont,
      "&, &$tableCell": {
        fontSize: "1em"
      }
    },
    tableCell: {
      ...defaultFont,
      lineHeight: "1.42857143",
      padding: "0px 8px",
      verticalAlign: "middle",
      fontSize: "0.8125rem"
    },
    tableResponsive: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    tableHeadRow: {
      height: "56px",
      color: "inherit",
      display: "table-row",
      outline: "none",
      verticalAlign: "middle"
    },
    tableBodyRow: {
      height: "48px",
      color: "inherit",
      display: "table-row",
      outline: "none",
      verticalAlign: "middle"
    },
    descriptionCell: {
      whiteSpace: "nowrap",
      maxWidth: "200px",
      width: "100px",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    }
  });
  
  export default tableStyle;