
import React,{useState,useEffect} from 'react'

import  './home.css'
import Swal from 'sweetalert2'

function Home() {
   

   const log='/02.jpg'
    const abc='/bnb.jpg'
    
    const lg='/ab.jpg'
    const abnb='/abnb.jpg'
    const a='/03.jpg'
    const b='/04.jpg'
    const c='/05.jpg'
    const gif='/gif3.gif'
    const tk='/tk.jpg'
    const profile='/profile.jpg'

    
    

  //  const[picurl,setPicurl]=useState(['1.jpg','2.jpg','3.jpg','4.jpg'])
    const[piccount,setPiccount]=useState(0)
    const[pic,setPic]=useState([abnb,abc])
    const[pics,setPics]=useState([,abc,a,b,c])
    const[color,setColor]=useState('#454545')
    const[hcolor,setHcolor]=useState('black')
    const[bdr,setBdr]=useState('0px')
    const[wid,setWid]=useState('60%')
    const[scale,setScale]=useState('scale(1)')
    const[radius,setRadius]=useState('199px')
    const[visible,setVisible]=useState(false)
    const[state,setState]=useState({width: window.innerWidth})
    const[inputs,setInputs]=useState('')
    const[ht,setHt]=useState('57px')
    const[mht,setMht]=useState('800px')
    const[font,setFont]=useState('45px')
    const[htt,setHtt]=useState('900px')
    const[wd,setWd]=useState('500px')
    const[fnt,setFnt]=useState('20px')
    let currentSlide = 1;

   

    const Message=async()=>{
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Message',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
              'aria-label': 'Type your message here'
            },
            showCancelButton: true
          })
          
          if (text) {
           // Swal.fire(text)
           Email()
          }
    }

    const Alert=()=>{
      Swal.fire({
        title: 'Custom animation with Animate.css',
        text:'I love to Code Looking foward to work with you',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }

    const Email=async()=>{
        const { value: email } = await Swal.fire({
            title: 'Input email address',
            input: 'email',
            inputLabel: 'We will send you a response via this mail',
            inputPlaceholder: 'Enter your email address'
          })
          
          if (email) {
            Swal.fire('Message sent successfully')
          }
    }

    
    const { width } = state;
    const isMobile = width <= 800;
    const mobile = width <=500

    
 const   handleWindowSizeChange = () => {
    setState({ width: window.innerWidth });
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return()=>{
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [])

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 80 || 
     document.documentElement.scrollTop > 80 ) {
    
     setVisible(true)
      
     }
    
    else {
      
     
     setVisible(false)
    }
  }

  useEffect(() => {
    if(isMobile ){
        setHt('55px')
        setMht('400px')
        setFont('18px')
        setHtt('400px')
        setFont('15px')
        setWd('92%')
    }

    
    
    else{
        if(!isMobile){
       // setFlex(2.5)
        setHt('57px')
        setMht('800px')
      setFont('45px')
      setHtt('800px')
      setFnt('20px')
      setWd('500px')
        }
    }
    
  }, [isMobile])

  

    useEffect(()=>{
        if(piccount==1){
            setColor('#454525')
           setHcolor('#454549')
            setBdr('199px')
            setWid('60%')
            setScale('scale(1')
            setRadius('199px')
            
        }

        else{
            setColor('#454545')
            setHcolor('black')
            setBdr('0px')
            setWid('20%')
            setScale('scale(1.02)')
            setRadius('0px')
    }
    })

    useEffect(()=>{
if(piccount==0){
    const bs=pics.sort()
    setPics(bs)
}

if(piccount==1){
    const bt=pics.sort()
    const bts=bt.reverse()

    setPics(bts)
}

    },[piccount])
   
    useEffect(()=>{
        let result=pic.hasOwnProperty([piccount]);
        if(result==false){
            setPiccount(0)
       // console.log(result); // true
     }

     else{
         setTimeout(()=>{
             setPiccount(piccount+1)

         },10000)
     }
    })

    useEffect(()=>{
        let result=pic.hasOwnProperty([piccount]);
        if(result==false){
            setPiccount(0)
       // console.log(result); // true
     }

     else{
         setTimeout(()=>{
             setPiccount(piccount+1)

         },10000)
     }
    })

    return (
        <div className='home' >

  




        <div className='header' style={{backgroundColor:hcolor,
        background: `url('${process.env.PUBLIC_URL}/gif5.gif')
              no-repeat fixed center`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition: 'center',
    
}}>
<h2 style={{fontSize:fnt}} onClick={()=>window.location.assign("https://funt-307c6.web.app/")}
>My Google Clone</h2>
<h2 style={{fontSize:fnt}} onClick={()=>{window.location.assign("https://clone-app-1607112875349.firebaseapp.com/");
}}>My Social App</h2>
<h2 style={{fontSize:fnt}}  onClick={()=>window.scrollTo(0,document.body.scrollHeight)} >More</h2>
        </div>

       

        <div className='body' style={{backgroundColor:color}}>

        <div className='body_header' style={{
             background: `url('${process.env.PUBLIC_URL}/gif5.gif')
              no-repeat fixed center`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition: 'center',

      minWidth:'80%',
       height:htt,maxHeight:htt,
       objectFit:'contain'
       
    
    }}>
<img src={pic[piccount]} style={{ minWidth:'90%',width:'90%',
       maxHeight:mht,height:mht,borderRadius:bdr,objectFit:'contain'
    }}/>


{piccount==1 &&<div className='txt'> <p style={{color:'white',
fontSize:font,margin:0}}>
Your World is</p>
<p style={{color:'white',fontSize:font,margin:0}}>
 worth sharing</p>

 
</div>}
{piccount==1 && <img style={{width:'200px',height:'150px',
maxWidth:'200px',maxHeight:'150px'}} onClick={Message} className='txt_' src={tk}/>}

{piccount==1 && !isMobile &&   <div style={{backgroundColor:'black',height:'100px',margin:0,width:wid}} > 
    && <p style={{color:'white',backgroundColor:'black'}}>
        The Kakum National Park is made up of mostly undisturbed virgin
         rainforest and is one of the famous national parks in Ghana.
          Kakum National Park is situated about 33km north of Cape Coast,
           Central Regional capital and about 170km from Accra. It covers an
            area of 350km2 (including Assin Attandanso Resource Reserve)The
             vegetation type is Moist evergreen rainforest with tall hardwood 
             trees up 65m in height. 
        </p>
    
        </div>}
        </div>
        <div className='body_main'>
        <div style={{display:'flex',flexDirection:'row'
        ,justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
          <img src={profile} style={{width:'200px',height:'200px',
          maxWidth:'200px',maxHeight:'200px',borderRadius:'40%'}}/>

         <div style={{backgroundColor:'gainsboro',margin:'10px'}}> 
         <p style={{margin:'30px'}}>Am a Junior React.js developer,
         i have some few  projects i worked on my free time,you can check it on this page</p>
           <p>Best Regards, Ibrahim</p>
           </div>
        </div>
        <div>
       <p style={{color:'white',fontSize:fnt}}>
       Click on the Button below to check some of my Projects</p>
       <button onClick={()=>window.location.assign("https://funt-307c6.web.app/")}
        style={{margin:'10px',cursor:'pointer',fontSize:'20px',
       color:'blue'}}>Search Engine App</button>
       <button onClick={()=>{window.location.assign("https://clone-app-1607112875349.firebaseapp.com/");
}} style={{cursor:'pointer',color:'blue',fontSize:'20px'}}>Social Media App</button>
      
        </div>
        </div>
       
        <div style={{display:'flex'
              ,width:'100%',justifyContent:'center',
              alignItems:'center',flexDirection:'row' 
              ,backgroundColor:'gainsboro',flexWrap:'wrap',marginBottom:'50px'
            /*background: `url('${process.env.PUBLIC_URL}/gif6.gif')
              no-repeat fixed center`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition: 'center'
      */}}>
      {pics.map((item)=>{
          return(
              
              <div className='flxx'>
                  <img  src={item} style={{
                      width:wd,height:'400px',
                      maxWidth:wd,maxHeight:'350px',margin:'20px',transform:scale,
                      borderRadius:radius
                      
    
  

}}/>
              
              </div>
          )
      })}
      </div>

        </div>

        <div className='footer'>
        <div style={{width:'20%',display:'flex',justifyContent:'center'}}>
        
                <p style={{color:'white'}}>aviata543@gmail.com</p>
             
    </div>
        </div>

            
        </div>
    )
}

export default Home
