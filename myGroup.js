/**
 * Returns array with n equally sized arrays .
 * Ex : original array given as [1, 2, 3, 4, 5], n as 3  then three equally divided arrays returned in a array => [ [1,2], [3,4], [5] ]
 *
 * @param original_arr, array of length >= 0.
 * @param {number} n, must be a positive number.
 * @return contents of the array with n equally sized arrays.
 */
groupArrayElements = (original_arr, n) => {
  const result_arr = [];
  let copied_arr = [...original_arr];
  const reminder = copied_arr.length % n ;
  const size = (n % 2 == 0 || reminder == 0) ? Math.floor(copied_arr.length / n) : Math.floor((copied_arr.length-1)  / (n-1));
  
  for (let i = 0; i < n-1; i++) {
    result_arr.push(copied_arr.splice(0, size));
  }
  if(reminder > 0 || copied_arr ){
    result_arr.push(copied_arr);
  }
  return result_arr;
}
