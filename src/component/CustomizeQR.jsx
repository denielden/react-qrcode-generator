const CustomizeQR = props => {
   return (
      <>
         <div>
            <input id={props.id} name={props.id}
               type="color"
               value={props.customColor}
               onChange={props.handleQrCustom}
            />
            <label htmlFor={props.id}>Customize {props.label}</label>
         </div>
      </>
   );
}

export default CustomizeQR;