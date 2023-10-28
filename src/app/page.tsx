'use client';
import Image from 'next/image'

import React, { useEffect, useState } from 'react';

function UserData() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data.users);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // @ts-ignore
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="m-10" >
      <h1><center>Data</center></h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Password</th>
            <th>Birth Date</th>
            <th>Blood Group</th>
            <th>Height</th>
            <th>Hair</th>
            <th>Address</th>
            
          </tr>
        </thead>
        <tbody>
          {userData.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img src={user.image} alt={`User ${user.id}`} width="100" />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.birthDate}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.height}</td>
              <td>
                <tr>{user.hair.color}</tr>
                <tr>{user.hair.type}</tr>
              </td>
              <td>
                {user.address.address}, {user.address.city}, {user.address.state}, {user.address.postalCode},{user.address.coordinates.lat},{user.address.coordinates.lng}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



function Header() {
  return (<div className='display-table mt-3 max-w-prose p-1'>
    <h1 className='mt-6 text-3xl font-medium text-black'>Task 3</h1>
    <table className="mt-3 regid w-full max-w-prose">
      <thead></thead>
      <tbody>
      <tr>
        <td>Registration number</td>
        <td>21BCE5841</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>Srevin Saju</td>
      </tr>
      </tbody>
    </table>
    </div>)

}



export default function Home() {
  let [color, colorChanged] = useState("white");

  let handleChange = (e: any) => {
    colorChanged(e.target.name)
  }

  let d: any[] = [];
  let colors = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen", 
  ]
  colors.forEach((c, i) => {
    d.push(<button className='w-10 h-10 p-1 m-1 rounded-lg'  name={c} onClick={handleChange} style={{backgroundColor: c}}>
    
    </button>)
  })
  return (
    <main className="w-full h-screen" style={{backgroundColor: color}}>
      <Header />

      
        <UserData />
    
    </main>
  )
}
