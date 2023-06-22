// import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between max-w-5xl m-auto">
        <img src="/favicon_io/android-chrome-192x192.png" alt="" className="w-20" />
        <ul className="flex items-center justify-around space-x-10">
          <li className="font-bold">Dr. John Doe</li>
          {/* <li><Link to={'/'} className="text-red-800 border-[1px] rounded p-2 border-red-800">Logout</Link></li> */}
        </ul>
    </div>
  )
}

export default Navbar