import './App.css';
import BackgroundImg from './assets/background.svg'
import facebook from './assets/facebook.png'
import google from './assets/google.png'
import twitter from './assets/twitter.png'

function BgImg(){
  return(
    <img className='bgImg' src={BackgroundImg} alt="Backgound"></img>
  )
}

function FormField({fieldName}){
  return(
    <input className="formField" type="text" id={fieldName} value={fieldName} ></input>
  );
}

function TitleText(){
  return(
    <div className="titleText">
      <h1>Sign Up</h1>
      <p>
        Lorem ipsum dolor sit amet elit. Sapiente 
        sit aut eos consectetur adipisicing.
      </p>
    </div>
  );
}

function TermsAndConditions(){
  return(
  <label className="checkBoxContainer">
    <input type="checkbox" className="check"/>
    <span className="checkBoxText">
      Creating an account means you're okay with our 
      Terms and Conditions and our Privacy Policy.
    </span>
  </label>
  );
}

function RegisterButton(){
  return(
    <input type="button" className="registerButton" value="Register"></input>
  );
}

function SSOSignOn(){
  return(
    <div className="ssoContainer">
      <span>— or register with —</span>
      <div className="ssoButtons">
        <input type="image" src={facebook}></input>
        <input type="image" src={google}></input>
        <input type="image" src={twitter}></input>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="appContainer">
        <BgImg />
        <div className="formConatainer">
          <TitleText />
          <div className="fieldContainer">
            <FormField fieldName="Full name"/>
            <FormField fieldName="Email"/>
            <FormField fieldName="Password"/>
            <FormField fieldName="Re-type Password"/>
          </div>
          <TermsAndConditions />
          <RegisterButton />
          <SSOSignOn />

        </div>
      </div>
  </div>
  );
}

export default App;
