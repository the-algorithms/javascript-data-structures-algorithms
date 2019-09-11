const Height = (T) => {
  if (T == null)
    return 0;
  else {
    let heightLeft = Height(T.left);
    let heightRight = Height(T.right);
    if (heightLeft > heightRight)
      return heightLeft + 1;
    else
      return heightRight + 1;
  }
}
function isBalanced(T) {

  if (T == null) 
    return true;
    
  if (!T.left) 
    isBalanced(T.right);
    
  if (!T.right) 
    isBalanced(T.left);

  let balanceFactor = Math.abs(Height(T.left) - Height(T.right));
  
  if (balanceFactor <= 1)
      return true  
  
  return false;
}