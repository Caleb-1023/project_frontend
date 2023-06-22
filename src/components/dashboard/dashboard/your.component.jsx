import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
// import ApexCharts from 'apexcharts'

const FirebaseComponent = () => {
  const [data, setData] = useState(null);

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyBtv4TcFb-50zMYpUOgRV3VAhcxCZHhshM',
      authDomain: 'project-test-58f78.firebaseapp.com',
      databaseURL: 'https://project-test-58f78-default-rtdb.firebaseio.com',
      projectId: 'project-test-58f78',
      storageBucket: 'project-test-58f78.appspot.com',
      messagingSenderId: '694575932490',
      appId: '1:694575932490:web:ac606864e08ebb3399f2b3',
      measurementId: 'G-28V21PQBWK'
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    const messagesRef = ref(database, 'Collected Data');

    const getAllData = () => {
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        setData(Object.values(data).reverse())
        console.log(Object.values(data));
        // Process the data as needed
      });
    };

    useEffect(() => {
      getAllData()
    }, [])
  

  return (
    <div>
      {/* Your JSX code goes here */}
      {/* Make sure you have elements with ids 'bpm' and 'spo2' */}
      {/* <button id="getDataButton" onClick={getAllData}>
        Get All Data
      </button> */}
      <div>
      {data ? (
        <>
        <ul className='w-screen max-w-5xl m-auto flex flex-col space-y-5 text-white text-center'>
          {data.map((d, i) => (
            <li key={i} className='flex space-x-10'><span className='w-1/12 p-3 rounded bg-red-900'>{d.bpm}</span> <span className='w-1/12 p-3 rounded bg-blue-900'>{d.spo2}</span></li>
          ))}
        </ul>
        {/* <ApexCharts></ApexCharts> */}
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
    </div>
  );
};

export default FirebaseComponent;
