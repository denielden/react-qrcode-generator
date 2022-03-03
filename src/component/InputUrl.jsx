const InputUrl = ({ url, handleGenerate }) => {
   return (
      <input id="url" name="url"
         type="url"
         value={url}
         onChange={handleGenerate}
         placeholder="Add URL for QR code generation"
         required
      />
   );
}

export default InputUrl;