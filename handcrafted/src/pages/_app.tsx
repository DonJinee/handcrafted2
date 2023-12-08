import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { userService } from '@/services/user.service';
import Head from 'next/head';

interface User {
  id: string;
  token?: string;
  // Add other properties as needed
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check 
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false  
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check 
    router.events.on('routeChangeComplete', authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
        router.events.off('routeChangeStart', hideContent);
        router.events.off('routeChangeComplete', authCheck);
    }
}, []);

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in 
    setUser(userService.userValue);
    const publicPaths = ['/signin', '/register', '/'];
    const path = url.split('?')[0];
    if (!userService.userValue && !publicPaths.includes(path)) {
        setAuthorized(false);
        router.push({
            pathname: '/signin',
            query: { returnUrl: router.asPath }
        });
    } else {
        setAuthorized(true);
    }
}

  // Make sure to use useCallback for memoization
const hideContent = useCallback(() => setAuthorized(false), []);

  return (
    <Fragment>
      <Head>
        <title>Hand-Crafted Haven</title>
      </Head>
      {authorized && <Component {...pageProps} />}
    </Fragment>
  );
}
