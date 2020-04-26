import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  // Main Classes:
  root: {
    display: 'flex',
  },
  mainContainer: {
    backgroundColor: '#F7F8FC',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  rowContainer: {
    marginBottom: 20,
  },
  topBarTitle: {
    color: 'black',
  },
  topBarTitleIcon: {
    color: 'black',
    lineHeight: 1
  },
  mapContainer: {
    height: '50vh',
    width: '100%',
  },

  // Side Bar Navigator:
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: '#363740',
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#363740',
  },
  menuIcon: {
    color: '#A4A6B3',
  },
  listItem: {
    color: '#A4A6B3',
  },
  activeMenuLabel: {
    color: '#DDE2FF',
  },
  activeMenuIcon: {
    color: '#DDE2FF',
  },
  activeListItem: {
    backgroundColor: '#9FA2B41A',
    '&:hover': {
      backgroundColor: '#9FA2B41A',
    },
  },

  // Status Card:
  statusCard: {
    height: 110,
  },
  statusCardValue: {
    fontSize: 40,
    fontWeight: 'normal',
  },
  statusCardValueWhite:{
    fontSize: 40,
    fontWeight: 'normal',
    color: 'white',
  },
  statusCardLow:{
    height: 110,
    background: "#29CC97",
  },
  statusCardMedium:{
    height: 110,
    background: "#FF8E25",
  },
  statusCardHigh:{
    height: 110,
    background: "#F12B2C",
  },
  statusCardCritical:{
    height: 110,
    background: "#6d0202",
  },

  informationCardName: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5
  },
  informationCardDetail:{
    fontSize: 15
  },

  // Login:
  loginField: {
    width: '100%',
    color: '#DDe2ff',
  },
  loginContainer: {
    marginBottom: 15,
  },
  loginTitle: {
    fontSize: 25,
    marinBottom: 25,
  },



  // Patient:
  patientGrid: {
    height: 110,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  patientText: {
    height: 20,
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.primary,
  },
  graphAndMap: {
    height: 300,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));
