import { useEffect , useState } from "react";

export default function Test(){
    const [count,setCount] = useState(1);
    useEffect(()=>{
        console.log("Component İlk Yüklendiğinde Çalışıcak");


        // Api İsteği Örneği
        fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => console.log(json))

        return ()=>{
            console.log("Compenent Kapatıldığında Çalışacak.");
        }
    },[])

    useEffect(()=>{
        console.log("Değişkendeki Değer Her Değiştiğinde Çalışıyor");

        // Api İsteği Örneği Her Veri Değiştiğinde
        fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
                .then(response => response.json())
                .then(json => console.log(json))
    },[count])

    useEffect(()=>{
        console.log("Component Her Render Olduğunda Çalışıcak");
    })

    return(
        <div>
            <br />
            <span>Sayac : {count}</span><br /><hr />
            <button onClick={()=>{setCount(count=>count+1)}}>Sonraki</button>
        </div>
    );
}