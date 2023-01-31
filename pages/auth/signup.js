import Link from 'next/link';
import React from 'react';
import { EvalyLogo } from '../../components/icons/logo';
import { useFormik, Form, FormikProvider } from 'formik';
import FormTextField from '../../components/forms/FormTextField';
import * as yup from 'yup';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import {
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import Head from 'next/head';

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    termsConditions: false,
  };

  const validationSchema = yup.object({
    fullName: yup.string().email().required('Enter your full name'),
    email: yup.string().email().required('Enter your email'),
    password: yup.string().required('Enter your password'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log('Form Values', values);
    },
  });

  return (
    <>
      <Head>
        <title>evaly - Create Account</title>
      </Head>
      {/* //  h-screen */}
      <div className='flex flex-col gap-11 items-center justify-center py-20 bg-white'>
        <p className='text-3xl font-bold text-black'>Create a new account</p>
        <div className='flex flex-col gap-4 w-[90%] max-w-lg'>
          <TextField
            name='fullName'
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
            placeholder='Full Name'
            variant='outlined'
            color='secondary'
            size='medium'
            className='textField'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PersonOutlineOutlinedIcon color='inherit' />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            placeholder='Email'
            variant='outlined'
            color='secondary'
            size='medium'
            className='textField'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <MailOutlineOutlinedIcon color='inherit' />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name='password'
            type={showPassword ? 'text' : 'password'}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            placeholder='Password'
            variant='outlined'
            color='secondary'
            className='textField'
            size='medium'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LockOutlinedIcon color='inherit' />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleClickShowPassword} edge='end'>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Forget Password */}
          <div className='flex pb-2 gap-1 items-center'>
            <Checkbox
              color='default'
              name='termsConditions'
              checked={formik.values.termsConditions}
              onChange={formik.handleChange}
              required
            />
            <p className='text-md font-medium text-gray-700'>
              I agree to the{' '}
              <Link
                href='#'
                className='text-black underline hover:text-black-800 font-medium'
              >
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link
                href='#'
                className='text-black underline hover:text-black-800 font-medium'
              >
                Terms & Conditions
              </Link>{' '}
              of Evaly.
            </p>
          </div>
          <button
            className='bg-[#000000] text-white rounded-lg p-3 w-ull'
            type='submit'
            onClick={formik.handleSubmit}
          >
            Sign Up
          </button>
          {/* <p className='text-center'>Or</p>
        <button className='border-2 border-black text-[#000000] font-semibold rounded-lg p-3 w-full'>
          Sign In with Google
        </button> */}
        </div>
        <p className='text-center text-md font-normal'>
          Already have an account?{' '}
          <Link
            href='/auth/signin'
            className='text-red-700 font-bold hover:underline'
          >
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;