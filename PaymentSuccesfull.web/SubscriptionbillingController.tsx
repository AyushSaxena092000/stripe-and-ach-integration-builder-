import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { imgPasswordInVisible, imgPasswordVisible } from "./assets";

// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  stripe: any;
  elements: any;
  // Customizable Area End
}


interface S {
  txtInputValue: string;
  txtSavedValue: string;
  enableField: boolean;
  // Customizable Area Start
  checked: boolean;
  expanded: boolean;
  modalOpen: boolean;
  paymentMethod: 'creditCard' | 'bankTransfer';
  showPaymentMethod: any;
  cardBrand: any;
  cardHolderName: any;
  stripeToken:any;
  cardType: any;
  accountHolderName: string;
  bankName: string;
  accountType: string;
  routingNumber: string;
  accountNumber: string;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class SubscriptionbillingController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  createSubscriptionApiCallId:any;
  createSubscriptionAchApiCallId:any;
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      // Customizable Area Start
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage),
      getName(MessageEnum.NavigationPayLoadMessage)
      // Customizable Area End
    ];

    this.state = {
      txtInputValue: "",
      txtSavedValue: "A",
      enableField: false,
      // Customizable Area Start
      checked:false,
      expanded: false,
      modalOpen: false,
      paymentMethod: 'creditCard',
      showPaymentMethod: '1',
      cardBrand: 'visa',
      cardHolderName:'',
      stripeToken:'',
      cardType:'',
      accountHolderName: '',
      bankName: '',
      accountType: '',
      routingNumber: '',
      accountNumber: ''
      // Customizable Area End
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);

    // Customizable Area Start
    // Customizable Area End
  }

  async receive(from: string, message: Message) {
    runEngine.debugLog("Message Recived", message);

    if (message.id === getName(MessageEnum.AccoutLoginSuccess)) {
      let value = message.getData(getName(MessageEnum.AuthTokenDataMessage));

      this.showAlert(
        "Change Value",
        "From: " + this.state.txtSavedValue + " To: " + value
      );

      this.setState({ txtSavedValue: value });
    }

    // Customizable Area Start
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );

      let responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );
      if (responseJson && !responseJson.errors) {
       
        if(apiRequestCallId === this.createSubscriptionApiCallId){
         console.log('response 127-->', responseJson);
         
        }
        else if(apiRequestCallId === this.createSubscriptionAchApiCallId){
          console.log('response 131-->', responseJson);
        }
      }
      }
    // Customizable Area End
  }

  txtInputWebProps = {
    onChangeText: (text: string) => {
      this.setState({ txtInputValue: text });
    },
    secureTextEntry: false,
  };

  txtInputMobileProps = {
    ...this.txtInputWebProps,
    autoCompleteType: "email",
    keyboardType: "email-address",
  };

  txtInputProps = this.isPlatformWeb()
    ? this.txtInputWebProps
    : this.txtInputMobileProps;

  btnShowHideProps = {
    onPress: () => {
      this.setState({ enableField: !this.state.enableField });
      this.txtInputProps.secureTextEntry = !this.state.enableField;
      this.btnShowHideImageProps.source = this.txtInputProps.secureTextEntry
        ? imgPasswordVisible
        : imgPasswordInVisible;
    },
  };

  btnShowHideImageProps = {
    source: this.txtInputProps.secureTextEntry
      ? imgPasswordVisible
      : imgPasswordInVisible,
  };

  btnExampleProps = {
    onPress: () => this.doButtonPressed(),
  };

  doButtonPressed() {
    let msg = new Message(getName(MessageEnum.AccoutLoginSuccess));
    msg.addData(
      getName(MessageEnum.AuthTokenDataMessage),
      this.state.txtInputValue
    );
    this.send(msg);
  }

  // web events
  setInputValue = (text: string) => {
    this.setState({ txtInputValue: text });
  };

  setEnableField = () => {
    this.setState({ enableField: !this.state.enableField });
  };

  // Customizable Area Start
 
  handleAccordian = () => {
    this.setState((prevState) => ({ expanded: !prevState.expanded }));
  };
  
  handleOpenModal = (data: any) => {
    this.setState({ modalOpen: true, cardType:data.title });
    
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  handleToggleButton = (
    event: React.MouseEvent<HTMLElement>,
    newPaymentMethod: 'creditCard' | 'bankTransfer'
  ) => {
    if (newPaymentMethod !== null) {
      this.setState({ paymentMethod: newPaymentMethod });
    }
  };

  handleBankName = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { value } = event.target || { value: undefined }; 
    this.setState({ bankName: value as string || '' });
  };
  
  handleAccountType = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { value } = event.target || { value: undefined }; 
    this.setState({ accountType: value as string }); 
  }  

  
handleCardNumberChange = (event: any) => {
  this.setState({ cardBrand: event.brand });
};

handleCardHolderName = (event: React.ChangeEvent<HTMLInputElement>) => {
  this.setState({ cardHolderName: event.target.value });
};

handleChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
  const { name, value } = event.target;
  if (name) {
      this.setState((prevState) => ({
          ...prevState,
          [name]: value,
      }));
  }
};



createSubscriptionApiCall = (id:any) => {

  
  let token = localStorage.getItem("token");

  const header = {
    "Content-Type": configJSON.validationApiContentType,
    token: token
  };

  const body = {
      "plan": this.state.cardType,
      "token_stripe":id
  }

  const requestMessage = new Message(
    getName(MessageEnum.RestAPIRequestMessage)
  );

  this.createSubscriptionApiCallId = requestMessage.messageId;

  requestMessage.addData(
    getName(MessageEnum.RestAPIResponceEndPointMessage),
    configJSON.createSubscriptionEndPoint
  );
  requestMessage.addData(
    getName(MessageEnum.RestAPIRequestHeaderMessage),
    JSON.stringify(header)
  );
  requestMessage.addData(
    getName(MessageEnum.RestAPIRequestBodyMessage),
    JSON.stringify(body)
  );

  requestMessage.addData(
    getName(MessageEnum.RestAPIRequestMethodMessage),
    configJSON.createSubscriptionApiMethodType
  );

  runEngine.sendMessage(requestMessage.id, requestMessage);
};

createSubscriptionAchApiCall = () => {

  let token = localStorage.getItem("token");

  const header = {
    "Content-Type": configJSON.validationApiContentType,
    token: token
  };

  const body = {
    "plan": this.state.cardType,
    "account_holder_name": this.state.accountHolderName,
    "account_holder_type": this.state.accountType,
    "routing_number": this.state.routingNumber,
    "account_number": this.state.accountNumber,
    "bank_name": this.state.bankName
}


  const requestMessage = new Message(
    getName(MessageEnum.RestAPIRequestMessage)
  );

  this.createSubscriptionAchApiCallId = requestMessage.messageId;

  requestMessage.addData(
    getName(MessageEnum.RestAPIResponceEndPointMessage),
    configJSON.createSubscriptionAchEndPoint
  );
  requestMessage.addData(
    getName(MessageEnum.RestAPIRequestHeaderMessage),
    JSON.stringify(header)
  );
  requestMessage.addData(
    getName(MessageEnum.RestAPIRequestBodyMessage),
    JSON.stringify(body)
  );

  requestMessage.addData(
    getName(MessageEnum.RestAPIRequestMethodMessage),
    configJSON.createSubscriptionAchApiMethodType
  );

  runEngine.sendMessage(requestMessage.id, requestMessage);
};

  // Customizable Area End
}
