const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team = '';
  if(!Array.isArray(members)) return false;
  for (let i = 0; i < members.length; i++){
    if( typeof members[i] === 'string'){
      members[i] = members[i].trim();
    }
  }
  for (let i = 0; i < members.length; i++){
    if( typeof members[i] === 'string'){
      team += members[i].trim()[0];
    }
    else continue;
  }

  return team.toUpperCase().split('').sort().join('');
};
