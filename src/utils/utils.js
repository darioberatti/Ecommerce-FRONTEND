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
