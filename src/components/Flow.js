import React from 'react'
import './Flow.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Flow() {
  return (
    <section className='A mt-6'>
      <h1>
        How it works
      </h1>
      <div className='row mt-5 align-items-center justify-content-center'>
        <div className='col-md-3'>
          <div className='icon text-center' >
          <i class='fas fa-mouse-pointer'/>
          </div>
          <h3 className=' text text-center'> Select a field or Counselor</h3>
        </div>

        <div className='col-md-3'>
          <div className='icon text-center fs ' >
          <i class="bi bi-check-square"></i>
          </div>
          <h3 className='text-center'>Start the Online Counsellimg</h3>
        </div>

        <div className='col-md-3'>
          <div className='icon text-center fs ' >
          <i class='fa fa-star checked'/>
          </div>
          <h3 className='text-center'>Achive your Goal</h3>
        </div>
        
        
      </div>
    </section>
    
  )
}

export default Flow