const calcTime = (created_at)=>{
 
  let cTime = Date.now()
  
  let time_diff = cTime - created_at
  let fsecs = parseInt(time_diff/(1000))
  let fmins = parseInt(fsecs/60)
  let fhrs = parseInt(fmins/60)
  let fdays = parseInt(fhrs/24)
  let fweeks = parseInt(fdays/7)
  let fmonths = parseInt(fdays/30.5)
  let fyears = parseInt(fdays/365)


  // console.log("fsecs= ", fsecs)
  // console.log("fmins= ", fmins)
  // console.log("fhrs= ", fhrs)
  // console.log("fdays= ", fdays)
  // console.log("fweeks= ", fweeks)
  // console.log("fmonths= ", fmonths)
  // console.log("fyears= ", fyears)


  if(fyears>0){
    return fyears + " years ago"
  } else if( fmonths>0){
    return fmonths + " months ago"
  } else if(fweeks>0){
    return fweeks + " weeks ago"
  } else if(fdays>0){
    return fdays + " days ago"
  } else if(fhrs>0){
    return fhrs + " hours ago"
  } else if(fmins>0){
    return fmins + " minutes ago"
  } else {
    return " few seconds ago"
  }
}
export default calcTime