/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    /*
      Understand
        I: integer initialEnergy
           integer initialExperience
           array energy -
           array experience +
        O: integer, training hours
        C
        E
        
        energy   5  
        exp      3        
        
        energy      [1, 4, 3, 2] -> 
        experience  [2, 6, 3, 1] -> 
        
      Match
      Plan
      Implement
      Review
      Explain
      
      
    */
  let trainingReq = 0;
  let diff;
  
  for (let i = 0; i < energy.length; i++) {
    if (initialEnergy <= energy[i]) {
      diff = energy[i] - initialEnergy + 1;
      trainingReq += diff;
      initialEnergy += diff;
    }
    initialEnergy -= energy[i];
    if (initialExperience <= experience[i]) {
      diff = experience[i] - initialExperience + 1;
      trainingReq += diff;
      initialExperience += diff;
    }
    initialExperience += experience[i];
  }
  
  return trainingReq;
};