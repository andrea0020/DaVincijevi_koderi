import { Link } from 'react-router-dom'
import { Navbar } from '../navbar/Navbar'

export function HomePage() {
  return (
    <div className='container'>
        <Navbar />
        <div style={{ textAlign: 'center', color: 'bisque', marginTop: '50px' }}>
        <h2>Istražite i otkrijte sve što imamo za ponuditi. </h2>
        <h3 style={{marginTop: '20px'}}>Prijavite se, istražite našu ponudu i odaberite svoju željenu knjigu!</h3>
      </div>
    </div>
  )
}

