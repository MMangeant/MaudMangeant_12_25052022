
// export const FetchData = async () => {

//     try {
//       const userMainDatas = await fetch(`http://localhost:3000/user/18`)
//         .then((res) => res.json())
//         .then((data) => data)
//       return userMainDatas.data
//     } catch (err) {
//       console.log(err)
//     }
  
// }



// import { useState, useEffect } from 'react';

// let url="http://localhost:3000/user/18";

// function FetchData() {
//     const [dataFetch, getDataFetch] = useState(null);

//     useEffect(() => {

//         fetch(url)
//             .then(response => response.json())
//             .then(data => getDataFetch(data));

//     }, []);

//     return ( {dataFetch} );
// }

// export { FetchData };




// import { useEffect, useState } from 'react';

// const FetchData = (url) => {
// 	const [data, setData] = useState({});
// 	const [isDataLoading, setDataLoading] = useState(false);
// 	const [error, setError] = useState(false);

  
	
// 	useEffect(() => {	
			
// 		setDataLoading(true);

// 		async function fetchFonction() {
// 			setDataLoading(true);
// 			try {
// 				const response = await fetch(url);
// 				const data = await response.json();
// 				setData(data.data);
// 			} catch (err) {
// 				console.log(err);
// 				setError(true);
// 			} finally {
// 				setDataLoading(false);
// 			}
// 		}
// 		fetchFonction();
// 	}, [url]);

// 	return { data, isDataLoading, error };
// };

// export default FetchData;








