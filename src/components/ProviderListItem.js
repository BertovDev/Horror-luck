import React from 'react'
import { ListGroup,Image} from 'react-bootstrap'

export default function ProviderListItem({id,name,image,clearSearch,setFeature}) {
  return (
    <ListGroup.Item style={{cursor:"pointer"}} onClick={() => {setFeature({id:id,name:name,image:image});clearSearch("")}}>
        {name}
        <Image src={image}/>
    </ListGroup.Item>
  )
}
