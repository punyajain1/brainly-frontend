import { useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ContentModal } from '../components/CreateContentModal'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/usecontent'
import axios from 'axios'
import { backend_url } from '../config'
import { useNavigate } from "react-router-dom";


function SDasboard() {
    const navigate = useNavigate();
    function routeChange(path: any){ 
        navigate(path);
    }
    const [modalopen, setmodalopen] = useState(false);
    const { contents, loading } = useContent();

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    return (
      <div>
        <Sidebar />
        <div className='p-4 ml-72 min-h-screen bg-gray-100'>
          <ContentModal open={modalopen} onClose={() => setmodalopen(false)} />
          <div className='flex justify-end gap-4'>
            <Button onClick={() => routeChange('/signup')} varient='primary' text='Sign Up' />
            <Button onClick={() => routeChange('/signin')} varient='secondary' text='Sign In' />
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

export default SDasboard
