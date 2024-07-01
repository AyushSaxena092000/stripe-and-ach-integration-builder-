import React, { FormEvent, useState, ChangeEvent } from 'react';
import { loadStripe, Stripe, StripeElements } from '@stripe/stripe-js';
import { Elements, ElementsConsumer, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { Box, Button, Divider, Typography } from '@material-ui/core';


const stripePromise = loadStripe('pk_test_51OlKnUD9RbOIQf5WWrEt9UuTCqaZCjOPcdzN3DEHBFUyNTRwWLeBhQoo67JFXlKYtu2L4yk9L6F0ofzLTjZsKRpH00WiywtuIB');

const webStyle = {
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
  titleTexts: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#1C2110"
  },
};

interface CreditCardPaymentProps {
  handleCloseModal: () => void;
  paymentCallback: (paymentMethodId: string) => void;
}

const CreditCardPayment: React.FC<CreditCardPaymentProps> = ({ handleCloseModal, paymentCallback }) => {
  const [cardHolderName, setCardHolderName] = useState<string>('');
  const [cardBrand, setCardBrand] = useState<string>('');

  const handleCardHolderName = (e: ChangeEvent<HTMLInputElement>) => setCardHolderName(e.target.value);

  const getCardLogo = (brand: string) => {
    if (brand === 'visa') {
      return (
        <img
          src={require("./visa.png")}
          alt="Visa logo"
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            width: '24px',
            height: '24px',
          }}
        />
      );
    } else if (brand === 'mastercard') {
      return (
        <img
          src={require("./masterCard.png")}
          alt="MasterCard logo"
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            width: '24px',
            height: '24px',
          }}
        />
      );
    }
    return null;
  };

  const handleCardNumberChange = (event: any) => {
    if (event.brand) {
      setCardBrand(event.brand);
    }
  };

  const handleCardPayments = async (event: FormEvent, stripe: Stripe | null, elements: StripeElements | null) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe.js not loaded');
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    if (!cardElement) {
      console.error('Card element not found');
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: cardHolderName,
        },
      });

      if (error) {
        console.error('Error creating payment method:', error);
      } else if (paymentMethod) {
        console.log('Payment Method:', paymentMethod);
        paymentCallback(paymentMethod.id);
      } else {
        console.error('Payment method creation returned null or undefined');
      }
    } catch (error) {
      console.error('Exception creating payment method:', error);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <ElementsConsumer>
        {({ stripe, elements }) => (
          <form onSubmit={(e) => handleCardPayments(e, stripe, elements)} style={{ marginTop: 30 }} data-test-id="handleCardPayment">
            <Typography style={webStyle.titleTexts}>Cardholder name</Typography>
            <div style={{ position: 'relative', marginBottom: '20px', marginTop: 5 }}>
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
                autoComplete="off"
                name="fullName"
                placeholder="Cardholder Name"
                value={cardHolderName}
                onChange={handleCardHolderName}
                data-test-id="inputSimulate"
              />
              <img
               src={require("./profile.png")}
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  right: '10px',
                  width: '24px',
                  height: '24px',
                }}
                alt="Profile"
              />
            </div>

            <Typography style={webStyle.titleTexts}>Card number</Typography>
            <div
              style={{
                marginBottom: '20px',
                marginTop: '5px',
                border: '1px solid #D6D3D1',
                borderRadius: '4px',
                padding: '20px 10px 16px 10px',
                position: 'relative',
              }}
            >
              <CardNumberElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#A8A29E',
                      fontFamily: 'Poppins',
                      fontWeight: 400,
                      '::placeholder': {
                        color: '#A8A29E',
                        fontSize: '16px',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }}
                onChange={handleCardNumberChange}
                data-test-id="fillCardsDetailsTest"
              />
              {getCardLogo(cardBrand)}
            </div>

            <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div style={{ flex: '1', marginRight: '10px' }}>
                <Typography style={webStyle.titleTexts}>Expiration date</Typography>
                <div
                  style={{
                    marginBottom: '20px',
                    marginTop: '5px',
                    border: '1px solid #D6D3D1',
                    borderRadius: '4px',
                    padding: '20px 10px 16px 10px',
                  }}
                >
                  <CardExpiryElement
                    options={{
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#A8A29E',
                          fontFamily: 'Poppins',
                          fontWeight: 400,
                          '::placeholder': {
                            color: '#A8A29E',
                            fontSize: '16px',
                          },
                          padding: '10px',
                        },
                        invalid: {
                          color: '#9e2146',
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div style={{ flex: '1', marginLeft: '10px' }}>
                <Typography style={webStyle.titleTexts}>Security code</Typography>
                <div
                  style={{
                    marginBottom: '20px',
                    marginTop: '5px',
                    border: '1px solid #D6D3D1',
                    borderRadius: '4px',
                    padding: '20px 10px 16px 10px',
                  }}
                >
                  <CardCvcElement
                    options={{
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#A8A29E',
                          fontFamily: 'Poppins',
                          fontWeight: 400,
                          '::placeholder': {
                            color: '#A8A29E',
                            fontSize: '16px',
                          },
                          padding: '10px',
                        },
                        invalid: {
                          color: '#9e2146',
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </Box>

            <Divider
              style={{
                width: 'calc(100% + 90px)',
                margin: '10px -44px',
              }}
            />

            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button style={webStyle.cancleButton} onClick={handleCloseModal}>
                <Typography style={webStyle.cancelText as any}>Cancel</Typography>
              </Button>

              <Button style={webStyle.continueButton} type="submit">
                <Typography style={webStyle.continueText as any}>Purchase</Typography>
              </Button>
            </Box>
          </form>
        )}
      </ElementsConsumer>
    </Elements>
  );
};

export default CreditCardPayment;
