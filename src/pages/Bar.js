import React,{useContext, useState, useEffect} from 'react';
import Context from '../Context';


 const Bar = () => {

    const [getRadarChartUrl, setGetRadarChartUrl] = useState('')
    const {html} = useContext(Context);
    const {js1} = useContext(Context);
    const {js2} = useContext(Context);
    const {js3} = useContext(Context);
    const {node} = useContext(Context);
    const {databases} = useContext(Context);
    const {react} = useContext(Context);

    const URL = `https://quickchart.io/chart?c={type:'bar',data:{labels:['html','js1', 'js2','js3', 'node', ''databases, 'react'],datasets:[data:[${html},${js1},${js2},${js3},${node},${databases}, ${react}]}]}}"`;

    useEffect(() => {
        fetchApi();
      }, []);
    
     
    async function fetchApi (){
        try{ let response = await fetch(URL);
         let data = await response.json();
         setGetRadarChartUrl(data.url)
        
        }
        catch{
            console.log("API ERROR");
            return 0
        }
    }
    
    return (
        <div>
        image with url from Api bar
         <img src={getRadarChartUrl} alt="bar chart"/>
        </div>
    )
}

export default Bar;
