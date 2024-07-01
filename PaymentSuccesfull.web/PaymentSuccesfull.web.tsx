import React from "react";

import { Box, Button, IconButton, Typography, Card, CardContent, Divider } from "@material-ui/core";

// Customizable Area Start
import { styled } from "@material-ui/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Customizable Area End

import SubscriptionController, {
    Props,
} from "./SubcriptionController.web";
import { BackArrowBlack, avatar, logo, successPayment, outlineCheck } from "./assets";

export default class PaymentSuccesfull extends SubscriptionController {
    constructor(props: Props) {
        super(props);
        // Customizable Area Start
        // Customizable Area End
    }

    // Customizable Area Start
    // Customizable Area End

    render() {
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
                </Box>
                <Box style={{marginBottom:80}}>
                <Box style={{ display: 'flex', justifyContent: 'center', marginTop: 100, flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Box style={{ display: 'flex', justifyContent: 'center', maxWidth: '589px', width: '100%' }}>
                        <img src={successPayment} />
                    </Box>
                    <Typography style={webStyle.paymentHeader}>The payment has been successfully processed</Typography>
                    <Typography style={webStyle.paymentSecondHeader}>You have activated your subscription to Individuals plan. </Typography>
                </Box>
                <Box>
                    <Card style={{ maxWidth: 600, margin: '20px auto', padding: '20px', background: '#F4F4F4' }}>
                        <CardContent>
                            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography style={{ fontSize: 18, fontWeight: 700, fontFamily: 'Poppins' }}>
                                    Subscription Information
                                </Typography>
                                <Typography style={{ fontSize: 18, fontWeight: 700, fontFamily: 'Poppins' }}>No. 76896458</Typography>
                            </Box>
                            <Box style={{ display: 'flex', marginTop: 20, gap: 12, width: '100%' }}>
                                <Typography style={{ fontSize: 12, fontWeight: 700, fontFamily: 'Poppins', maxWidth: '35%', width: '100%', flex: 1 }}>Your Plan</Typography>
                                <Typography style={{ fontSize: 12, fontWeight: 700, fontFamily: 'Poppins', maxWidth: '39%', width: '100%', flex: 1 }}>Details</Typography>
                                <Typography style={{ fontSize: 12, fontWeight: 700, fontFamily: 'Poppins', maxWidth: '25%', width: '100%', flex: 1 }}></Typography>
                            </Box>
                            <Divider style={{
                                marginTop: 20
                            }} />
                            <Box style={{ display: 'flex', marginTop: 20, gap: 12, width: '100%' }}>
                                <Typography style={{ fontSize: 12, fontWeight: 400, fontFamily: 'Poppins', maxWidth: '35%', width: '100%', flex: 1 }}>Individuals</Typography>
                                <Box style={{ display: 'flex', maxWidth: '39%', width: '100%', flex: 1 }}>
                                    <img src={outlineCheck} width={20} style={{ aspectRatio: '1/1' }} />
                                    <Typography style={{ fontSize: 12, fontFamily: 'Poppins', fontWeight: 400 }}>100 GB of storage</Typography>
                                </Box>
                                <Typography style={{ fontSize: 12, fontWeight: 400, fontFamily: 'Poppins', maxWidth: '25%', width: '100%', flex: 1 }}></Typography>
                            </Box>
                            <Box style={{ display: 'flex', marginTop: 20, gap: 12, width: '100%' }}>
                                <Typography style={{ fontSize: 12, fontWeight: 700, fontFamily: 'Poppins', maxWidth: '35%', width: '100%', flex: 1 }}>E-mail</Typography>
                                <Typography style={{ fontSize: 12, fontWeight: 700, fontFamily: 'Poppins', maxWidth: '39%', width: '100%', flex: 1 }}>Amount</Typography>
                                <Typography style={{ fontSize: 12, fontWeight: 700, fontFamily: 'Poppins', maxWidth: '25%', width: '100%', flex: 1 }}>Bill date</Typography>

                            </Box>
                            <Divider style={{
                                marginTop: 20
                            }} />
                            <Box style={{ display: 'flex', marginTop: 20, width: '100%', gap: 12 }}>
                                <Typography style={{ fontSize: 12, fontWeight: 400, fontFamily: 'Poppins', maxWidth: '35%', width: '100%', flex: 1 }}>alexandra.smith@gmail.com</Typography>
                                <Typography style={{ fontSize: 12, fontFamily: 'Poppins', maxWidth: '39%', width: '100%', flex: 1, fontWeight: 400 }}>$3.99/month</Typography>
                                <Typography style={{ fontSize: 12, fontFamily: 'Poppins', fontWeight: 400, maxWidth: '25%', width: '100%', flex: 1 }}>14th day of every month</Typography>
                            </Box>
                        </CardContent>
                    </Card>


                </Box>
                <Box style={{display:'flex', justifyContent:'center'}}>
                <Button style={webStyle.continueButton}>
                    <Typography style={webStyle.continueText as any}>Let’s get Started</Typography>
                </Button>
                </Box>
                </Box>
            </Box>
            // Customizable Area End
        );
    }
}

// Customizable Area Start
const webStyle = {
    headerView: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        borderBottom: '1px solid #E7E5E4'
    },
    paymentHeader: {
        maxWidth: '417px',
        width: '100%',
        fontSize: 24,
        fontWeight: 700,
        fontFamily: 'Poppins',
        marginTop: 30
    } as React.CSSProperties,
    paymentSecondHeader: {
        fontSize: 16,
        fontWeight: 400,
        fontFamily: 'Poppins',
        marginTop: 20
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
}
// Customizable Area End