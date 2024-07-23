import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import { title } from 'process';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = {firstName : 'Adrian' , lastName : 'Doe' ,email : 'adrian.doe@me.com'};
  return (
    <section className ="home">
        <div className= "home-content">
          <header className="home-header">
            <HeaderBox 
              type='greeting'
              title ='Welcome'
              user = {loggedIn?.firstName || 'Guset'}
              subtext = 'Access manage your account and transactions  efficiently.'
            />

            <TotalBalanceBox
            accounts ={[]}
            totalBanks ={1}
            totalCurrentBalance={1250.50}
            />
          </header>
            RECENT TRANSACTION
        </div>
        <RightSidebar
          user = {loggedIn}
          transactions = {[]}
          banks = {[{currentBalance : 1250.50},{currentBalance : 1950.50}]}
          />
     </section>
  )
}

export default Home