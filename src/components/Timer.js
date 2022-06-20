// import React, { useEffect, useRef, useState } from 'react';
//
// const Timer = () => {
//     const [count, setCount] = useState(30);
//     const ref = useRef(null);
//
//     useEffect(() => {
//         ref.current = setInterval(()=>{
//             setCount(prev => {
//                 console.log(prev);
//                 if (prev === 0) {
//                     ref.current = null;
//                     return 0;
//                 }
//                 return prev - 1;
//             });
//         }, 1000);
//         return () => {
//             clearInterval(ref.current);
//         };
//     }, []);
//
//     const reset = () => {
//         setCount(30);
//         ref.current = setInterval( ref.current = setInterval(()=>{
//             setCount(prev => {
//                 console.log(prev);
//                 if (prev === 0) {
//                     ref.current = null;
//                     return 0;
//                 }
//                 return prev - 1;
//             })},1000}
//     };
//
//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={reset}>reset</button>
//         </div>
//     )
// };
//
// export default Timer;