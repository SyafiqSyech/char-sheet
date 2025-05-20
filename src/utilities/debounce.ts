export function debounce<T extends (...args: any[]) => void>(
  fn: T, 
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: number | undefined;
  
  return function(this: any, ...args: Parameters<T>) {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => fn.apply(this, args), delay);
  };
}