import Navbar from "../navbar/navbar.component"
import FirebaseComponent from "./your.component"

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl m-auto">
        <div>
          <h1>Patient Details</h1>
          <p>Name: Mr Okpaheifufue Caleb</p>
          <p>Gender: Male</p>
          <p>Age: 20</p>
          <p>Diagnosis: Healthy</p>
        </div>
        <div className="my-10">
          <FirebaseComponent />
        </div>
      </div>
    </>
  )
}

export default Dashboard