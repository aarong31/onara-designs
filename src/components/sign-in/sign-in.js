import React from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input';
import CustomButton from '../button/button';

import { auth, signInWithGoogle } from '../../firebase-utils/firebase.utils';

import './sign-in.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: ''});
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="section has-text-centered">
      <div className='container pb-4'>
        <span className="subtitle is-5 has-text-black">Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <span className="pr-2"><CustomButton type='submit'>Sign in </CustomButton></span>
          <span className="pl-2"><CustomButton onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton></span>
        </form>
        </div>
        <Link to="/signup">
          <div className="subtitle is-5 has-text-black pt-5 accHover">I do not have an account</div>
        </Link>
        </div>
    );
  }
}

export default SignIn;