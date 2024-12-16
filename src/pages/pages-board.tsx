import { useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ContentModal } from '../components/CreateContentModal'
import { PlusIcon } from '../icons/plusicon'
import {Shareicon} from '../icons/shareicon'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/usecontent'
import axios from 'axios'
import { backend_url } from '../config'

function Dasboard() {
    const [modalopen, setmodalopen] = useState(false);
    const { contents, loading } = useContent();
    console.log("Contents received:", contents); 

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  
    return (
      <div>
        <Sidebar />
        <div className='p-4 ml-72 min-h-screen bg-gray-100'>
          <ContentModal open={modalopen} onClose={() => setmodalopen(false)} />
          <div className='flex justify-end gap-4'>
            <Button onClick={() => setmodalopen(true)} varient='primary' text='Add Content' starticon={<PlusIcon />} />
            <Button onClick={ async()=>{
                const res = await axios.post(backend_url+"/api/v1/brain/share" , {
                    share: true
                } , {
                    headers:{
                        "Authorization" : localStorage.getItem("authorization")
                    }
                });
                const shareurl = "http://localhost:5173/:"+res.data.hash;
                alert(shareurl);
            }} varient='secondary' text='Share Brain' starticon={<Shareicon />} />
          </div>
  
          <div className="flex gap-4 flex-wrap">
            {contents.map(({ type, link, title }, index) => (
              <Card key={index} type={type} links={link} title={title} />
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Dasboard
