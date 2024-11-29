// ----------------Fetching Api --------------------
// 1-
  // async function getdata(){
  //   let {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
  //   console.log(data);
  // }
  // useEffect(()=>{
  //   getdata()
  // },[])






// ---------------- fetching Api in React Query --------------------
// 2
//   function getdata(){
//     return  axios.get("https://jsonplaceholder.typicode.com/posts")
//     }
//     let {data ,isError , isLoading , isFetching} = useQuery("fuctionerproduct" , getdata , {
//       cacheTime:3000 ,// control timeout cachTime
//       refetchOnMount:false, //Not Refetched
//       refetchInterval:3000 , // Requst Refresh interval in the timeout 
//       enabled:false, //Not fetching
//     })  // uneck name
//     console.log(data);




// ----------------  Api Post --------------------

// function getdata(id){
// return  axios.post("URL" , bodypost in Backend , header or confirtion)
//   .then((response) => response)   لو كان صحيح
//   .catch((error) => error))    لو في مشكله
// }





// ---------------- Use Context --------------------
  // let x = useContext(UserContext)
  // console.log(x);






// ---------------- Routing ID --------------------

  //   { path: "Home/:id", element: <Home/> }

  // 2- <Link to={"page/${product.id}"}>Code html   </Link>

  // 3- let x = useParams()    // reding Url


// ----------------  Slider in react-slick --------------------

// 1-  <Slider {...settings}>    <img className="w-100" src="URL"/>    </Slider> 
// 2-import Slider from "react-slick";


// 3  - settings Slider
// var settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };




// ----------------  useRef --------------------
// لو عاوز تمسك input

// 1- let myinput = useref();
// 2-myinput.current.focus();

// 3- html
// <input ref={myinput}/>









// --------------------------Tailwind --------------------------
// 1 - hover:bg-red-800
// 2 - focus
// 3 - disabled:  --- required:
// 4 - p-[10px]
// 5 - space-x-0