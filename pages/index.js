import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import apiClient from '../data/apollo-client';
import USER_QUERY from '../data/userQuery';

export default function Home({ users }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div className={styles.grid}>
        {users.map((user) => (
            <div key={user.id} className={styles.card}>
              <p>
              {user.id} - {user.email}
              </p>
            </div>
          ))}
        </div>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await apiClient().query({
    query: USER_QUERY 
  });

  return {
    props: {
      users: data.queryUsersContents
    },
  };
}