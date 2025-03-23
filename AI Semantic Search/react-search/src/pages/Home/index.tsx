import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"

const home = () => {
    const [query,setQuery]=useState('')
    const navigate=useNavigate()
    const handleSearch=()=>{
        if(query){
            navigate(`/search?q=${query}`)
        } 
    }
  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-2">
        <Input
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  )
}

export default home;