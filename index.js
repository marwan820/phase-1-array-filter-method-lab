
function findMatching(array,name){
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
  return array.filter(driver => driver.toLowerCase() === name.toLowerCase())
  }
  
  function fuzzyMatch(array,name){
    const  drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

    return array.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
  }
  
  const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }]

function matchName(array,name){

  
return array.filter(driver => driver.name === name)
}
        
  