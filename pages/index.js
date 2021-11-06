import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Feed.module.scss'
import Card from '../components/Card'
import Highlight from '../components/Highlight'
import Layout from '../components/Layout'
import useSWRInfinite from 'swr/infinite'

let maxIndex = 0;

export async function getServerSideProps() {
  // const data = await fetch("http://18.134.140.176:2048/WilburFeed");
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  const res = await fetch(`http://18.134.140.176:2048/GetMostRecentIndex`, {'mode': 'cors'});
  
  // ToDo - fix the https issue that arises here - yu can't make requests to an http server from an https site
  const res2 = await fetch(`http://18.134.140.176:2048/WilburPagedItemNewestFirst?page=1&limit=1`, {'mode': 'cors'});
  console.log(res)
  const index = await res.json();
  const pageData = await res2.json();
  console.log(index)
  maxIndex = index;
  return {
    props: {
      pageData
    }
  }
}

const getKey = (pageIndex, previousPageData) => {
  console.log("Prev")
  console.log(previousPageData)

  if (pageIndex === 0 && previousPageData === null) {
    return `http://18.134.140.176:2048/WilburPagedItemNewestFirst?page=${pageIndex}&limit=${6}`
  }

  console.log(previousPageData.length)

  if(previousPageData && !previousPageData.length) {
    console.log("Woop")
    return null;
  }

  
  console.log(pageIndex)

  return `http://18.134.140.176:2048/WilburPagedItemNewestFirst?page=${pageIndex}&limit=${6}`
}

const fetcher = async (url) => {
  console.log(url);
  const res = await fetch(url, {'mode': 'cors'});
  const posts = await res.json();
  console.log(res.body)
  console.log(`post ${posts}`)

  console.log("hello")
  console.log(posts)

  return posts
}

export default function Home({pageData}) {

  const {data, size, setSize} = useSWRInfinite(getKey, fetcher)

  if (!data) return (<Layout> <Highlight id={19} title={"Wilbur's Wilderness Weekend - Campfire"} body={"Uh oh, that looks like fire, Wilbur, Wilbur! Are you ok? Fire is dangerous Wilbur! You will singe your fur. Come away from the fire Wilbur. How did you even manage to light the campfire? Phew, Wilbur says he's fine, he just wanted to get the whole wilderness experience by going wild camping, and in true camping style, the rain is pouring. Wilbur does not like getting wet, so he has set up a nice tent for himself. Consequently he is keeping his distance from the fire - at the moment at least. Thank goodness for that!"} wilburImage={"https://adventures-of-wilbur-images.s3.eu-west-2.amazonaws.com/Wilbur_2020_8_15_17_56_58_109.jpg"}></Highlight> 
  <div className={styles.flexContainer}>
          <Card id={278} title={"Delays in Duck Design Down to Deliberation"} body={"Wilbur and Mr Snuggles took their time to put the pieces together. After much deliberation about what the bricks were for they decided that they could design and build a duck! "} wilburImage={"https://adventures-of-wilbur-images.s3.eu-west-2.amazonaws.com/Wilbur_2021_4_14_13_15_55_480.jpg"}></Card>
        
        <Card id={7} title={"Wilbur Pauses in the Pond with his Paws in the Pond while Precipitation Pours in the Pond"} body={"Wilbur has been a busy Marmot today! It looks like he is taking a nice long bath in the pond, one of his favourite things to do. Loving the shower cap and wellies Wilbur! Don't forget to clean those teeth of yours! And make sure that you dry off before coming back into the house!"} wilburImage={"https://adventures-of-wilbur-images.s3.eu-west-2.amazonaws.com/Wilbur_2020_8_15_16_37_23_29.jpg"}></Card>
        
        <Card id={296} title={"Waking Up To Wilbur's Wonderful Waffles"} body={"Wilbur has developed a rather wonderful new skill - waffle making! Nothing like waking up to fresh, waffles by Wilbur!"} wilburImage={"https://adventures-of-wilbur-images.s3.eu-west-2.amazonaws.com/Wilbur_2021_8_18_7_21_25_364.jpg"}></Card></div></Layout>)

  console.log(data)
  
  console.log(`size ${size}`)

  var postCount = 0;
  for(var i = 0; i < data.length; i ++) {
    postCount += data[i].length
  }

  return (
    <Layout>

      {/* <script dangerouslySetInnerHTML={{ __html:
          `let observer = new IntersectionObserver(function(entries) {
              if(entries[0].isIntersecting === true)
                  console.log("Item visible")
              }, {threshold: [1]})
              
          observer.observe(document.querySelector(Highlight))
              `
          
              }}>
      </script> */}

      {/* <Highlight id={19} title={"Wilbur's Wilderness Weekend - Campfire"} body={"Uh oh, that looks like fire, Wilbur, Wilbur! Are you ok? Fire is dangerous Wilbur! You will singe your fur. Come away from the fire Wilbur. How did you even manage to light the campfire? Phew, Wilbur says he's fine, he just wanted to get the whole wilderness experience by going wild camping, and in true camping style, the rain is pouring. Wilbur does not like getting wet, so he has set up a nice tent for himself. Consequently he is keeping his distance from the fire - at the moment at least. Thank goodness for that!"} wilburImage={"https://adventures-of-wilbur-images.s3.eu-west-2.amazonaws.com/Wilbur_2020_8_15_17_56_58_109.jpg"}></Highlight> */}
    
      <div className={styles.flexContainer}>
        {data.map((posts, index) => {
          return posts.map(({id, title, body, wilburImage}) => (
            <Card key={id} id={id} title={title} body={body} wilburImage={`https://adventures-of-wilbur-images.s3.eu-west-2.amazonaws.com/${wilburImage}`}/>
        ))})}
        <button onClick={() => setSize(size + 1)} >More</button>
      </div>
    </Layout>
  )
}
