import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ( {onInputChange,onButtonSubmit} ) => {
    return (
        <div>
    		<p className="b f4">
    		 {'This magic brain will detect faces in your pictures, give it a try.'}
    		</p>
    		<div className="center">
        		 <div className="form center pa4 br3 shadow-5">
        			<input className="f4 pa2 w-70 center out" type="text" onChange={onInputChange}/>
        			<button className="w-30 grow f4 b--black link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>Detect</button>
        		 </div>
    		 </div>	
    	 </div> ); 
 }

export default ImageLinkForm;