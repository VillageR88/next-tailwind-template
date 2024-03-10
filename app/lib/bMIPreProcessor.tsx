const bMIPreProcessor = (e: React.ChangeEvent<HTMLInputElement>) => {
  let newValue = e.target.value;
  newValue = newValue
    .replace(/[^0-9.,]/g, '') // Remove non-numeric characters
    .replace(',', '.') // Replace comma with dot
    .replace(/(^[.,]+)/g, '') // Remove leading dots or commas
    .replace(/(^0+)/g, '') // Remove leading zeros
    .replace(/(\..*)\./g, '$1') // Remove multiple dots
    .replace(/(\.\d{2})./g, '$1'); // Allow only 2 decimal places
  if (newValue.length > 3 && !newValue.includes('.')) return newValue.slice(0, -1); // Allow only 3 digits before decimal
  return newValue;
};

export default bMIPreProcessor;
