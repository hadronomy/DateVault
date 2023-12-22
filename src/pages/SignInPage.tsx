import type React from 'react';

import SignInForm from '../components/SignInForm';

function SignInPage(): React.JSX.Element {
  return (
    <section className='flex items-center justify-center bg-custom-purple'>
      <div className='my-5 rounded-3xl bg-neutral-900'>
        <div className='p-10'>
          <div className='flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200'>
            <div className='w-full'>
              <div className='block rounded-lg bg-neutral-800 shadow-lg'>
                <div className='m-0 lg:flex lg:flex-wrap'>
                  <div className='px-4 md:px-0 lg:w-6/12'>
                    <div className='md:mx-6 md:p-12'>
                      {/* Logo */}
                      <div className='text-center'>
                        <div className='flex items-center justify-center'>
                          <img
                            className='mb-5 mt-10 w-40 rounded-full md:mt-0'
                            src='/logo-pink.jpeg'
                            alt='logo'
                          />
                        </div>
                        <div className='font-cute mb-4 text-4xl italic leading-tight md:text-5xl lg:text-6xl'>
                          <span className='text-custom-pink'>Date</span>
                          <span className='text-custom-pastel'>Vault</span>
                        </div>
                      </div>
                      <SignInForm />
                    </div>
                  </div>

                  {/* Right column container with background and description */}
                  <div className='custom-pink-gradient flex items-center justify-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none'>
                    <div className='font-cute px-4 py-6 text-xl font-semibold text-gray-750 md:mx-6 md:p-12'>
                      <span className=''>Save your </span>
                      <span className='italic tracking-widest text-white/[.75] drop-shadow-2xl'>
                        memories
                      </span>

                      <div>
                        <span>and make them everlasting.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignInPage;
