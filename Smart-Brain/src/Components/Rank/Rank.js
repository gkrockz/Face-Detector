import React from 'react';

const Rank = ({name, entries}) => { 
    return (
        <div>
        	<div className="b f3 ttc">
    	    	{`${name} , Your Current Entry Count Is...`}
    	    </div>
            <div className='white f1 '>
             	{entries}
          	</div>
    	</div>  
    );
}

export default Rank;