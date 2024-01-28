import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Checkout from './components/Chackout/Checkout';
import SharedLayout from './components/shared/SharedLayout';
import Login from './components/LogIn/Login';
import { useStateValue } from './components/StateProvider/Stateprovider';
import { auth } from './firebase';
import Payment from './components/Payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './components/Oreders/Orders';

const promise = loadStripe(
  "pk_test_51NtZYiJGW2oj6Y9w4FhTvtdh7TXhud8GaCzgd5VYIGJe47kA12NlZRHABgik2UC5ylIgJZFava85DiLigx3VbedI00Y5JYSaez"
);

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Elements stripe={promise}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/payment" element={<Payment />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Elements>
    </div>
  );
}

export default App;

