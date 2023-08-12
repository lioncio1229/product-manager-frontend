
/**
 * Abort API call in specific timeout in milliseconds
 * @param {*} timeoutMs 
 * @returns Object {signal, abort}
 */
export default function (timeoutMs=0) {
    const abortController = new AbortController();

    const data = setTimeout(() => abortController.abort(), timeoutMs);

    const abort = () => {
        clearTimeout(data);
        abortController.abort();
    }
  
    return {signal: abortController.signal, abort};
}