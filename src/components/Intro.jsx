// react
import { useState } from 'react';

//rrd
import { Form } from 'react-router-dom';

// library
import { UserPlusIcon } from '@heroicons/react/24/solid';

// assets
import illustration from '../assets/illustration.jpg';

//firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Intro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  async function handleSignUp() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className='intro'>
      <div>
        <h1>
          Take Control of <span className='accent'>Your Money</span>
        </h1>
        <p>
          Personla budgeting is the secret to financial freedom. Start your
          yourney today.
        </p>
        <Form method='post'>
          <input
            type='text'
            name='userName'
            required
            placeholder='What is your Email?'
            aria-label='Your Email'
            autoComplete='email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type='password'
            name='password'
            required
            placeholder='Create Password'
            aria-label='Create Password'
            autoComplete='new-password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type='hidden' name='_action' value='newUser' />
          <button
            type='submit'
            className='btn btn--dark'
            onClick={() => handleSignUp()}
          >
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt='Person with money' width={600} />
    </div>
  );
};

export default Intro;
