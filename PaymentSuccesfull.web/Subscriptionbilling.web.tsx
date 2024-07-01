import React from "react";

import {
  Container,
  Box,
  Button,
  Typography,
  IconButton,
  Card,
  CardContent,
  // Customizable Area Start
  Divider,
  Modal,
  TextField,
  FormControl,
  Select,
  MenuItem
  // Customizable Area End
} from "@material-ui/core";

// Customizable Area Start
import { logo, avatar, subscriptionLogo, peopleGroup, circleImage, subscriptionBackground, frGroup, downArrow, profileIcon, homeIcon, diversity } from "./assets";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from "../../../components/src/Footer.web";
import { outlineCheck } from "../../../blocks/landingpage/src/assets";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CloseIcon from '@mui/icons-material/Close';
import CreditCardPayment from "../../../components/src/CreditCardPayment";


interface Plan {
  id: string;
  icon: any;
  title: string;
  subtitle: string;
  price: string;
  priceSuffix: string;
  storage: string;
  description: string;
  boxStyle: React.CSSProperties;
  buttonStyle: React.CSSProperties;
}

const plans: Plan[] = [
  {
    id: 'individual',
    icon: profileIcon,
    title: 'Individuals',
    subtitle: 'Most Popular',
    price: '3.99',
    priceSuffix: '/ Month',
    storage: '100 GB of storage',
    description: 'Subscription designed for users seeking personalized access to platform features. This plan includes 100 GB of storage and offers benefits tailored to a single user.',
    boxStyle: { backgroundColor: '#8CA74B', color: '#fff', marginTop: 20, marginLeft: '-16px', marginRight: '-16px', padding: 10 },
    buttonStyle: { backgroundColor: '#8CA74B', color: '#fff' }
  },
  {
    id: 'family',
    icon: homeIcon,
    title: 'Family',
    subtitle: 'Recommended',
    price: '4.99',
    priceSuffix: '/ Month',
    storage: '200 GB of storage',
    description: 'It is ideal for users with a few contributors and includes 200 GB of storage. This plan allows multiple family members to collaborate and share memories while providing ample storage space for photos, recipes, and family tree information.',
    boxStyle: { backgroundColor: '#557C29', color: '#fff', marginTop: 20, marginLeft: '-16px', marginRight: '-16px', padding: 10 },
    buttonStyle: { backgroundColor: '#8CA74B', color: '#fff' }
  },
  {
    id: 'crew',
    icon: diversity,
    title: 'Crew',
    subtitle: 'Best value',
    price: '11.99',
    priceSuffix: '/ Month',
    storage: '2 TB of storage',
    description: 'It is perfect for inviting everyone to share and contribute. This plan offers 2 TB of storage, allowing unlimited collaboration and sharing among all members.',
    boxStyle: { backgroundColor: '#8CA74B', color: '#fff', marginTop: 20, marginLeft: '-16px', marginRight: '-16px', padding: 10 },
    buttonStyle: { backgroundColor: '#8CA74B', color: '#fff' }
  }
];


const bankNames = [
  "Bank of America",
  "Chase",
  "Wells Fargo",
  "Citi",
  "Capital One",
  "PNC Bank",
  "US Bank",
  "TD Bank",
  "BB&T",
  "SunTrust",
  "Fifth Third Bank",
  "HSBC",
  "Charles Schwab",
  "Ally Bank",
  "KeyBank",
  "Regions Bank",
  "Santander Bank",
  "BMO Harris Bank",
  "Huntington Bank",
  "M&T Bank",
  "Citizens Bank",
  "American Express",
  "Navy Federal Credit Union",
  "USAA",
  "Synchrony Bank",
  "Comerica",
  "Zions Bank",
  "First Republic Bank",
  "Silicon Valley Bank",
  "Discover Bank",
  "Goldman Sachs Bank USA",
  "Morgan Stanley Bank",
  "TD Ameritrade",
  "E*TRADE Bank",
  "Barclays Bank",
  "BancorpSouth",
  "BOK Financial",
  "Frost Bank",
  "Bank of the West",
  "BMO Financial Group",
  "Webster Bank",
  "Old National Bank",
  "UMB Financial Corporation",
  "People's United Financial",
  "FNB Corporation",
  "Pinnacle Financial Partners",
  "First National Bank",
  "Valley National Bank",
  "City National Bank",
  "East West Bank",
  "Cullen/Frost Bankers",
  "Synovus Bank",
  "Bank OZK",
  "Prosperity Bank",
  "Texas Capital Bank",
  "Wintrust Financial",
  "South State Bank",
  "Independent Bank",
  "Renasant Bank",
  "BankUnited",
  "First Citizens Bank",
  "United Community Bank",
  "Cadence Bank",
  "Western Alliance Bank",
  "Banner Bank",
  "Columbia Bank",
  "Great Western Bank",
  "Pacific Premier Bank",
  "First Horizon Bank",
  "Central Bank",
  "Southwest Bank",
  "Commerce Bank",
  "TowneBank",
  "Heritage Bank",
  "Bank of Hawaii",
  "BancFirst",
  "Glacier Bank",
  "Simmons Bank",
  "UMB Bank",
  "Heartland Bank",
  "Tri Counties Bank",
  "Trustmark National Bank",
  "First Financial Bank",
  "First Interstate Bank",
  "Provident Bank",
  "City Bank",
  "Hanmi Bank",
  "Mechanics Bank",
  "NBT Bank",
  "OceanFirst Bank",
  "Old Second National Bank",
  "Park National Bank",
  "Peoples Bank",
  "Pinnacle Bank",
  "PlainsCapital Bank",
  "PNC Bank",
  "Popular Bank",
  "Rabobank",
  "Raymond James Bank",
  "Republic Bank",
  "Rockland Trust",
  "Santander Bank",
  "Scotiabank",
  "Simmons Bank",
  "Southern Bank",
  "Sterling National Bank",
  "Synovus Bank",
  "TCF Bank",
  "TD Bank",
  "The Northern Trust Company",
  "Trustmark Bank",
  "UMB Bank",
  "Union Bank",
  "United Bank",
  "Valley National Bank",
  "Webster Bank",
  "Wells Fargo",
  "Western Alliance Bank",
  "Wintrust Bank",
  "Zions Bank"
];





// Customizable Area End

import SubscriptionbillingController, {
  Props,
} from "./SubscriptionbillingController";


export default class Subscriptionbilling extends SubscriptionbillingController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    const { expanded } = this.state;
    return (
      // Customizable Area Start
      <Box>
        <Box style={{ backgroundColor: '#FEFFFB' }}>
          <Box style={webStyle.headerView}>
            <img style={{ height: '44px', width: '32px' }} src={logo} />
            <Box style={{ display: 'flex' }}>
              <img src={avatar} />
              <IconButton aria-label="delete" size="small">
                <ExpandMoreIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
          <Box style={{ position: 'relative' }}>
            <Box style={{ padding: 20 }}>
              <Box style={{ maxWidth: 1209, width: '100%', margin: 'auto', marginTop: 100 }}>
                <Typography style={webStyle.headerText}>Plans that fit your scale</Typography>
                <Typography style={webStyle.subHeaderText}>Simple, transparent pricing that grows with you. Try any plan free for 05 days.</Typography>
                <img src={circleImage} style={{ position: 'absolute', top: 10, right: 0, width: 160 }} />
                <img src={subscriptionBackground} style={{ position: 'absolute', bottom: 10, left: 0, width: 162 }} />
              </Box>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 50 }}>


              {plans.map((plan) => (
                <Card key={plan.id} style={{ width: 370, display: 'flex', textAlign: 'center', height: '700px' }}>
                  <CardContent>
                    <img src={plan.icon} style={{ width: 40, height: 40 }} alt={plan.title} />
                    <Typography style={webStyle.firstCardText}>
                      {plan.title}
                    </Typography>
                    <Typography style={webStyle.secondCardText}>
                      {plan.subtitle}
                    </Typography>
                    <Box style={plan.boxStyle}>
                      <Box style={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="body2" style={webStyle.dollerSign}>
                          $
                        </Typography>
                        <Typography variant="h3" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 64, color: '#fff' }}>
                          {plan.price}
                        </Typography>
                      </Box>
                      <Typography style={webStyle.monthText}>
                        {plan.priceSuffix}
                      </Typography>
                    </Box>
                    <Typography style={webStyle.subscriptionText as any}>
                      {plan.description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent: 'center' }}>
                      <img src={outlineCheck} alt="check" />
                      <Typography style={{ color: '#78716C', marginLeft: 10 }}>
                        {plan.storage}
                      </Typography>
                    </Box>
                    <Button
                      style={webStyle.styleNowButton}
                      onClick={this.handleOpenModal.bind(this, plan)}
                      data-test-id="modalbutton"
                    >
                      <Typography style={webStyle.startNowText}>
                        Start now
                      </Typography>
                    </Button>
                  </CardContent>
                </Card>
              ))}
              <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <Modal
                  open={this.state.modalOpen}
                  onClose={this.handleCloseModal}
                  aria-labelledby="payment-modal-title"
                  aria-describedby="payment-modal-description"
                >
                  <Box style={{
                    width: "519px", margin: "auto", marginTop: 50, maxHeight: '90vh',

                  }}>
                    <Card
                      style={{
                        width: "519px",
                        borderBottomRightRadius: "40px",
                        boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.16)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginBottom: 100,
                        overflow: 'hidden',
                        maxHeight: 'inherit',
                      }}
                    >
                      <CardContent style={{
                        height: "100%",
                        overflowY: "auto",
                        overflowX: "hidden",
                        position: 'relative'
                      }}>
                        <Container>
                          <Box>
                            <Box style={{ display: "flex", justifyContent: "space-between" }}>
                              <Typography style={{ fontSize: 20, fontWeight: 700, fontFamily: 'Poppins', color: '#1C2110', marginTop: 10 }}>Payment method</Typography>

                              <IconButton
                                aria-label="close"
                                onClick={this.handleCloseModal}
                                data-tes-id="handleCloseSimulate"
                                style={{
                                  position: 'absolute',
                                  top: 15,
                                  right: 0,
                                  color: '#666',
                                }}
                              >
                                <CloseIcon />
                              </IconButton>
                            </Box>
                          </Box>
                          <Divider style={{
                            width: 'calc(100% + 90px)',
                            margin: '10px -44px',
                          }} />
                          <Box style={{
                            marginTop: 20,
                            backgroundColor: "#f7f0f0",
                            width: "100%",
                            minWidth: 408,
                            padding: 2,
                            borderRadius: 40
                          }}>
                            <ToggleButtonGroup
                              value={this.state.paymentMethod}
                              onChange={this.handleToggleButton}
                              exclusive
                              fullWidth
                              aria-label="payment method"
                              data-test-id="toggleButton"
                            >
                              <ToggleButton
                                value="bankTransfer"
                                aria-label="bank transfer"
                                style={{
                                  fontWeight: 700,
                                  fontFamily: 'Poppins',
                                  fontSize: 16,
                                  textTransform: 'none',
                                  borderColor: '#f7f0f0',
                                  color: this.state.paymentMethod === 'bankTransfer' ? '#FAFAF9' : '#78716C',
                                  borderRadius: 30,
                                  backgroundColor: this.state.paymentMethod === 'bankTransfer' ? '#8CA74B' : '#f7f0f0'
                                }}
                              >
                                Bank transfer (ACH)
                              </ToggleButton>
                              <ToggleButton
                                value="creditCard"
                                aria-label="credit card"
                                style={{
                                  fontWeight: 700,
                                  fontFamily: 'Poppins',
                                  fontSize: 16,
                                  borderRadius: 30,
                                  textTransform: 'none',
                                  borderColor: '#f7f0f0',
                                  color: this.state.paymentMethod === 'creditCard' ? '#ffffff' : '#78716C',
                                  backgroundColor: this.state.paymentMethod === 'creditCard' ? '#8CA74B' : '#f7f0f0'
                                }}
                              >
                                Credit Card
                              </ToggleButton>
                            </ToggleButtonGroup>
                          </Box>

                          {this.state.paymentMethod === 'creditCard' && (
                            <CreditCardPayment handleCloseModal={this.handleCloseModal}
                              paymentCallback={(id: any) => { this.createSubscriptionApiCall(id) }}
                            />
                          )}

                          {this.state.paymentMethod === 'bankTransfer' && (
                          <Box style={{marginTop:20}}>  
                            <Typography style={webStyle.titleTexts}>Full Name</Typography>
                            <input
                              type="text"
                              style={{
                                width: '100%',
                                borderRadius: '4px',
                                padding: '20px 10px 16px 10px',
                                border: '1px solid #ced4da',
                                paddingRight: '40px',
                                outline: 'none',
                                fontWeight: 400,
                                fontSize: '16px',
                                fontFamily: 'Poppins',
                                color: '#A8A29E',
                              }}
                              placeholder="Your Name"
                              name="accountHolderName"
                              value={this.state.accountHolderName}
                              onChange={this.handleChange}
                            />
                            <FormControl fullWidth variant="outlined" margin="normal">
                              <Typography style={webStyle.titleTexts}>Bank name</Typography>
                              <Select
                                value={this.state.bankName}
                                onChange={this.handleChange}
                                displayEmpty
                                name="bankName"
                                renderValue={this.state.bankName !== "" ? undefined : () => "Select bank name"}
                              >
                                <MenuItem value="">
                                  Select bank name
                                </MenuItem>
                                {bankNames.map((bank, index) => (
                                  <MenuItem key={index} value={bank}>
                                    {bank}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                            <Box display="flex" justifyContent="space-between" style={{ gap: 20 }}>
                              <div style={{ width: '48%' }}>
                                <Typography style={{ ...webStyle.titleTexts, marginBottom: 8 }}>Account Number</Typography>
                                <input
                                  type="text"
                                  style={{
                                    width: '100%',
                                    height: '55px', 
                                    borderRadius: '4px',
                                    padding: '20px 10px 16px 10px',
                                    border: '1px solid #ced4da',
                                    paddingRight: '40px',
                                    outline: 'none',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    fontFamily: 'Poppins',
                                    color: '#A8A29E',
                                    marginTop: 8
                                  }}
                                  placeholder="Enter Your Account Number"
                                  name="accountNumber"
                                  value={this.state.accountNumber}
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div style={{ width: '48%' }}>
                                <Typography style={{ ...webStyle.titleTexts, marginBottom: 8 }}>Bank Account Type</Typography>
                                <FormControl fullWidth variant="outlined" margin="normal" style={{ marginTop: 8 }}>
                                  <Select
                                    value={this.state.accountType}
                                    onChange={this.handleChange}
                                    displayEmpty
                                    name="accountType"
                                    renderValue={this.state.accountType !== "" ? undefined : () => "Select account type"}
                                  >
                                    <MenuItem value="">
                                      Select account type
                                    </MenuItem>
                                    <MenuItem value="individual">Individual</MenuItem>
                                    <MenuItem value="company">Company</MenuItem>
                                  </Select>
                                </FormControl>
                              </div>
                            </Box>
                            <Typography style={webStyle.titleTexts}>Routing number</Typography>
                            <input
                              type="text"
                              style={{
                                width: '100%',
                                borderRadius: '4px',
                                padding: '20px 10px 16px 10px',
                                border: '1px solid #ced4da',
                                paddingRight: '40px',
                                outline: 'none',
                                fontWeight: 400,
                                fontSize: '16px',
                                fontFamily: 'Poppins',
                                color: '#A8A29E',
                                marginTop: 8 
                              }}
                              placeholder="Your Routing Number"
                              name="routingNumber"
                              value={this.state.routingNumber}
                              onChange={this.handleChange}
                            />
                            <Divider style={{
                              width: 'calc(100% + 90px)',
                              margin: '10px -44px',
                              marginTop: 20
                            }} />
                            <Box display="flex" justifyContent="space-between">
                              <Button style={webStyle.cancleButton} onClick={this.handleCloseModal}>
                                <Typography style={webStyle.cancelText as any}>Cancel</Typography>
                              </Button>
                              <Button  style={webStyle.continueButton} onClick={this.createSubscriptionAchApiCall}>
                                <Typography style={webStyle.continueText as any}>Purchase</Typography>
                              </Button>
                            </Box>
                            </Box>
                          )}


                        </Container>
                      </CardContent>
                    </Card>
                  </Box>
                </Modal>
              </Box>

            </Box>
          </Box>
        </Box>
        <Box style={{ textAlign: 'center', maxWidth: '1030px', width: '100%', margin: 'auto', marginTop: 80 }}>
          <img src={subscriptionLogo} style={{ width: 56, height: 56, marginTop: 20 }} />
          <Typography style={webStyle.discoverText}>Discover our Plans</Typography>
          <Typography style={webStyle.subPlanText}>Explore the various subscription options tailored to meet your needs. From individual to crew plans, unlock exclusive features such as photo storage, family tree tools, recipe sharing, and more. </Typography>
          <img src={peopleGroup} />
        </Box>
        <Box style={{ gap: 64, maxWidth: 1280, width: '100%', margin: 'auto', display: 'flex', justifyContent: 'center', marginTop: 100, alignItems: 'center' }}>
          <Box>
            <Typography style={webStyle.joinCommunityText}>Join our community
              of 500+ individuals and start your journey with My Kinships today
            </Typography>
            <Typography style={webStyle.trailText}>Start your 05-day free trial today.</Typography>
            <Button
              style={webStyle.styleNowButton2}
            >
              <Typography style={webStyle.startNowText}>
                Get started
              </Typography>
            </Button>
          </Box>
          <img src={frGroup} style={{ maxWidth: 576, width: '100%', margin: 'auto' }} />
        </Box>
        <Box style={{ maxWidth: 1240, width: '100%', margin: 'auto' }}>
          <Typography style={webStyle.frequentlyText}>Frequently asked questions</Typography>
          <Typography style={webStyle.simpleText}>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</Typography>
        </Box>
        <Container maxWidth="md" style={{ marginBottom: 100, marginTop: 60 }}>
          <div style={{ width: '100%', marginTop: 50, maxWidth: 920, margin: 'auto' }}>

            {[1, 2, 3, 4, 5, 6].map((index: any) => <Box
              style={{
                borderRadius: '4px',
                marginBottom: '16px',
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px',
                  cursor: 'pointer',
                  borderBottom: !this.state.expanded ? '1px solid #D6D3D1' : "none",
                }}
                data-test-id="coveracordian1"
                onClick={this.handleAccordian}
              >
                <Typography style={{ flex: 1, fontFamily: 'Poppins', fontWeight: 700, fontSize: 18 }}>Is there a free trial available?</Typography>
                <IconButton
                  size="small"
                  onClick={this.handleAccordian}
                  data-test-id="coveracordian2"
                  aria-expanded={expanded}
                  aria-label="show more"
                  style={{ marginLeft: 'auto', transition: 'transform 0.3s ease' }}
                >
                  {/* <ExpandMoreIcon style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }} /> */}
                  <img src={downArrow} style={{ width: 24, transform: 'rotate(0deg)' }} onClick={this.handleAccordian} />
                </IconButton>
              </Box>
              {expanded && (
                <Box style={{ padding: '12px', borderBottom: this.state.expanded ? '1px solid #D6D3D1' : "none", }}>
                  <Typography style={{ flex: 1, fontFamily: 'Poppins', fontWeight: 400, fontSize: 16, color: '#5D6063' }}>
                    Yes, you can try us for free for 5 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                  </Typography>
                </Box>
              )}
            </Box>)}
          </div>
        </Container>
        <Footer />
      </Box>
      // Customizable Area End
    );
  }
}

// Customizable Area Start
const webStyle = {
  mainWrapper: {
    display: "flex",
    fontFamily: "Roboto-Medium",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "30px",
    background: "#fff",
  },
  inputStyle: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonStyle: {
    width: "100%",
    height: "45px",
    marginTop: "40px",
    border: "none",
    backgroundColor: "rgb(98, 0, 238)",
  },
  cancleButton: {
    backgroundColor: '#C2E176',
    borderRadius: '8px',
    height: '56px',
    width: '195px',
    marginTop: '32px',
  },
  cancelText: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#8CA74B',
    textTransform: 'none',
  },
  styleNowButton: {
    backgroundColor: '#8CA74B',
    borderRadius: '8px',
    padding: '10px',
    marginTop: '20px',
    marginBottom: '48px',
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: '182px',
  },
  styleNowButton2: {
    backgroundColor: '#8CA74B',
    borderRadius: '8px',
    padding: '10px',
    marginTop: '20px',
    display: "block",
    width: '182px',
  },
  startNowText: {
    lineHeight: "24px",
    fontWeight: 700,
    fontSize: "16px",
    textTransform: "none",
    fontFamily: 'Poppins',
    color: '#FFFFFF',
  } as React.CSSProperties,

  headerView: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    borderBottom: '1px solid #E7E5E4'
  },
  headerText: {
    fontSize: 36,
    fontFamily: 'Poppins',
    fontWeight: 700,
    color: '#1C1917'
  },
  subHeaderText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 400,
    color: '#5D6063'
  },
  firstCardText: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 30,
    fontFamily: 'Poppins',
    fontWeight: 700,
    color: '#1C1917'
  },
  secondCardText: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 400,
    color: '#1C1917'
  },
  greenBox: {
    backgroundColor: '#8CA74B',
    padding: '16px',
    width: '100%',
    marginLeft: '-16px',
    marginRight: '-16px',
    marginTop: 20
  },
  greenBox2: {
    backgroundColor: '#557C29',
    padding: '16px',
    width: '100%',
    marginLeft: '-16px',
    marginRight: '-16px',
    marginTop: 20
  },
  monthText: {
    fontSize: 20,
    fontWeight: 400,
    fontFamily: 'Poppins',
    display: 'flex',
    justifyContent: 'center',
    color: '#fff'
  },
  subscriptionText: {
    fontSize: 18,
    fontWeight: 400,
    fontFamily: 'Poppins',
    color: '#475467',
    padding: 20,
    minHeight: '250px',
    textAlign: "initial"
  },
  dollerSign: {
    fontFamily: 'Inter',
    fontWeight: 300,
    fontSize: 32,
    lineHeight: '32px',
    color: '#fff'
  },
  discoverText: {
    fontSize: 36,
    fontWeight: 700,
    fontFamily: 'Poppins',
    color: '#1C1917',
    marginTop: 20
  },
  subPlanText: {
    fontSize: 18,
    fontWeight: 400,
    fontFamily: 'Poppins',
    color: '#475467',
    marginTop: 10
  },
  joinCommunityText: {
    fontSize: 48,
    fontWeight: 700,
    fontFamily: 'Poppins',
    color: '#1C2110',
    width: 576,
    display: 'flex',
    alignItems: 'center'
  },
  trailText: {
    fontSize: 18,
    fontWeight: 400,
    fontFamily: 'Poppins',
    color: '#475467',
    marginTop: 10
  },
  simpleText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 400,
    color: '#5D6063'
  },
  frequentlyText: {
    fontSize: 36,
    fontFamily: 'Poppins',
    fontWeight: 700,
    color: '#1C1917',
    marginTop: 100
  },
  titleTexts: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#1C2110"
  },
  continueButton: {
    backgroundColor: "#8CA74B",
    borderRadius: '8px',
    height: '56px',
    width: '195px',
    marginTop: '32px',
  },
  continueText: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#FFFFFF",
    textTransform: 'none'
  },
  logoStyle: {
    position: 'absolute' as 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    width: '24px',
    height: '24px',
  },
};
// Customizable Area End
