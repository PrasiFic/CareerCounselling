import React from 'react';
import { Link } from 'react-router-dom';

function ExpertItem(props) {
  const{ src, name, company , description, path}=props
  return (
    <div className='cards__item'>
    <Link className='cards__item__link' to={path}>
      
    <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='cant load'
              src={src}
            />
          </figure>
    
    <div className='cards__item__info' style={{display:'flex',flexDirection:'column', alignItems:'strech'}}>
      <h5 >
        {name}</h5>
        <h6>{company}</h6>
        <p style={{textAlign:'justify'}}>{description}</p>
    </div>
  </Link>
  </div>
      // // <div className='card'>
      // //   <li className='cards__item'>
      // //   <Link className='cards__item__link' to={props.path}>
      // //     <figure className='cards__item__pic-wrap' data-category={props.label}>
      // //       <img
      // //         className='cards__item__img'
      // //         alt='cant load'
      // //         src={props.src}
      // //       />
      // //     </figure>
      // //     <div className='cards__item__info'>
      // //       <h5 className='cards__item__text'>{props.text}</h5>
      // //     </div>
      // //   </Link>
      // // </li>
      //   {/* <img className='card-item-img' src={props.src} alt=''/>
      //   <div className='card-text'>
      //     <h3> {props.Name} </h3>
      //     <h4> {props.job}</h4>
      //     <i class='fa fa-star checked' />
      //     <i class='fa fa-star checked' />
      //     <i class='fa fa-star checked' />
      //     <i class='fa fa-star' />
      //     <i class='fa fa-star' />
      //     <p> {props.about}</p>
      //     <button onclick={props.path}> Visit Profile</button>
      //     </div> */}
      // // </div>

  );
}

export default ExpertItem