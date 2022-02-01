const InputUrl = props => {
   return (
      <input id="url" name="url"
         type="url"
         value={props.url}
         onChange={props.handleGenerate}
         placeholder="Add URL for QR code generation"
         required
      />
   );
}

export default InputUrl;