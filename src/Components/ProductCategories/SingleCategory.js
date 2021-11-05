import React from 'react'
import { Link } from 'react-router-dom';
import './SingleCategory.css'
function SingleCategory({category}) {
    const title=category.toUpperCase();
 
    let styleClass='';
    let categoryImg='';
    if(category==='mugs'){
     styleClass='mug';
      categoryImg='https://mennaosama67.github.io/images/icons/mug.png';
    }else if(category==='vases'){
        styleClass='vase';
        categoryImg='https://mennaosama67.github.io/images/icons/vase.png';
    }
    else{
        styleClass='plate';
        categoryImg='https://mennaosama67.github.io/images/icons/plates.png'; 
    }
  
    
    return (
      
     <Link to={`/category/${category}`}>  
         <div className={`outer ${styleClass}`}>
            <div className="inner">
                <img src={categoryImg} />
               <span className="category-title">
               {title}
                   </span> 
            </div>
            
        </div>
        </Link> 
    )
}

export default SingleCategory
