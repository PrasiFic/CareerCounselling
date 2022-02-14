import React from 'react'
import './ExpertInfo.css';
import ExpertItem from './ExpertItem';
 

function Experts() {
  return (
    <section className='ExpertSection'>
      <h1>Our Experts</h1>
      <div className='card-container' style={{display:'flex', flexDirection:'row', justifyContent:'center' , alignItems:'center'}}>
      {/* <ul className='cards__items'> */}
            <ExpertItem
              src='images/sumya Dixit.jpeg'
              description='Got the responsibility to work as a Team Lead for a project for TATA Consultancy Services. Achieved a Microsoft certification for Azure AI fundamentals with a score of 910.'
              name='Saumya Dixit'
              company='Scored 90+ percentile consecutively'
              path=' '/>
              <ExpertItem
              src='images/ram.jpeg'
              description='Mechanical engineering 2018 pass-out. Gate Qualified 2018, 2019 (761 Gate score) PGDMM NITIE Mumbai 2019-2021'
              name='Ram Krishna Goswami'
              company='Jockey India'
              path=''/>
              <ExpertItem
              src='images/Ratnesh .jpeg'
              description='Member of "Aaghaz", Dramatics club of KMC Manipal. Member of Finance committee of IQMU 2022.'
              name='Ratnesh Gandhi'
              company='MBBS Student'
              path=''/>
              <ExpertItem
              src='images/abhi.jpeg'
              description=' NTPC selected, IIT Delhi - M.tech (Applied Mechanics)'
              name='Abhishek Viswakarma'
              company='ANZ Bank (Risk analyst)'
              path='/services'/>
              
              {/* </ul> */}
        {/* <div className='Expertcard'> */}
          {/* <ExpertItem
          src='images/sumya Dixit.jpeg'
          Name='Saumya Dixit'
          job='Scored 90+ percentile consecutively. 
          CAT'
          about='Got the responsibility to work as a Team Lead for a project for TATA Consultancy Services. Achieved a Microsoft certification for Azure AI fundamentals with a score of 910.'
          path='https://mui.com/components/cards/'
          />
          <ExpertItem
          src='images/Ratnesh .jpeg'
          Name='Ratnesh Gandhi'
          job='MBBS Student'
          about='Member of "Aaghaz", Dramatics club of KMC Manipal. Member of Finance committee of IQMU 2022.'
          path='https://mui.com/components/cards/'
          />
          <ExpertItem
          src='images/ram.jpeg'
          Name='Ram Krishna Goswami'
          job='Manager at Jockey India'
          about='Mechanical engineering 2018 pass-out Gate Qualified 2018, 2019 (761 Gate score) PGDMM NITIE Mumbai 2019-2021.'
          path='https://mui.com/components/cards/'
          />
          <ExpertItem
          src='images/vinay.jpeg'
          Name='Vinay Kumar Singh'
          job='DevOps Engineer at Knowlarity'
          about='He is the CEO and AKA of SKILLARK.'
          path='https://mui.com/components/cards/'
          />
        </div> */}
      </div>
    </section>
  );
}

export default Experts
