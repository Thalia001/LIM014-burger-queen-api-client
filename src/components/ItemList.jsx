import React from 'react';

const ItemList = ({name, handleEdit}) => {
    return ( 
        <div>
             {name}
             <button onClick={handleEdit} ><span  class="material-icons">mode_edit</span></button>  
             <button> <span  class="material-icons">delete_forever</span></button>  
            
        </div>

     );
}
 
export default ItemList;