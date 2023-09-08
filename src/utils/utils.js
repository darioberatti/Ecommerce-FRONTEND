export const onSubmitReload = () =>{
  window.location.reload()
}

export const sizeSetter = (sizes) => {
  let sizesStr = sizes[0]
  if (sizes.length > 1){
    for(let i=1;i<sizes.length;i++){
      sizesStr += `, ${sizes[i]}`
    }
  }
  return sizesStr
}