export const onSubmitReload = () => {
  window.location.reload();
};

export const sizeSetter = (sizes) => {
  let sizesStr = sizes[0];
  if (sizes.length > 1) {
    for (let i = 1; i < sizes.length; i++) {
      sizesStr += `, ${sizes[i]}`;
    }
  }
  return sizesStr;
};
 
export const dateSetter = (date) => {
  const dayAndTime = date.split("T");
  const [ year, month, day ] = dayAndTime[0].split("-");
  return `${day}-${month}-${year}`;
};

export const containsNumbers = (str) =>{
  return /\d/.test(str);
}

export const containsLetters = (str) =>{
  return (!/^[0-9]+$/.test(str))
}

export const setSizes =(sizes)=>{
  let strSizes = sizes[0]
  return strSizes
}