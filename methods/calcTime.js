const calcTime = (created_at)=>{
  let postedDateArr = created_at.split(/( )/);
  let date_pos = postedDateArr[0];
  let time_pos = postedDateArr[2];

  let year_pos = date_pos.split("-")[0];
  let month_pos = date_pos.split("-")[1]-1;
  let day_pos = date_pos.split("-")[2];

  let hrs_pos = time_pos.split(":")[0];
  let mins_pos = time_pos.split(":")[1];
  let secs_pos = time_pos.split(":")[2];

  // console.log(postedDateArr)
  // console.log("date = ",date_pos)
  // console.log("time= ",time_pos)
  // console.log("yrp= ",year_pos, " monp= ",month_pos, " dayp= ",day_pos)
  // console.log("hr= ",hrs_pos, " min= ",mins_pos, " sec= ",secs_pos)

  let date_posted = new Date(year_pos, month_pos, day_pos, hrs_pos, mins_pos, secs_pos)
  let cTime = Date.now()
  
  let time_diff = cTime - date_posted
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