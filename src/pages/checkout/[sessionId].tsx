/* eslint-disable @next/next/no-img-element */

import QRCodeComponent from '../../components/Checkout/QRCodeComponent';

const CheckoutSession = () => {
  return (
    <>
      <div className='flex min-h-full'>
        <div className='relative hidden w-0 flex-1 lg:block'>
          <img
            className='absolute inset-0 h-full w-full object-cover'
            src='https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
            alt=''
          />
        </div>
        <div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <img
                className='h-12 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt='Your Company'
              />
              <h2 className='mt-6 text-3xl font-bold tracking-tight text-gray-900'>
                Sign in to your account
              </h2>
              <p className='mt-2 text-sm text-gray-600'>
                Or{' '}
                <a
                  href='#'
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                >
                  start your 14-day free trial
                </a>
              </p>
            </div>
            <QRCodeComponent />
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutSession;
