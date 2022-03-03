import { useState } from 'react';
import { SketchPicker } from 'react-color'

const CustomizeQR = ({ id, label, customColor, handleQrCustom }) => {
   const [showPicker, setShowPicker] = useState(false),
         handleShowPicker = ()=> setShowPicker(!showPicker);

   return(
      <div>
         <input
            id={id}
            name={id}
            type="button"
            style={{background: customColor}}
            onClick={handleShowPicker}
         />
         <label htmlFor={id}>Customize {label}</label>

         {showPicker &&
            <SketchPicker
               className={id}
               presetColors={['#000000', '#FFFFFF']}
               color={customColor}
               onChange={handleQrCustom}
            />
         }
      </div>
   );
}

export default CustomizeQR;