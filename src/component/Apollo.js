import React from 'react';
import {gql,useQuery,useMutation} from "@apollo/client"


const GetData=gql`
	query MyQuery {
  kampus_merdeka {
    nama
  }
}
`
const InsertData=gql`
	mutation MyMutation {
  insert_kampus_merdeka(objects: {nama: "reza"}) {
    returning {
      nama
    }
  }
}


`




const Apollo = (props) => {
	const {data,loading,error}=useQuery(GetData)



	const {datas,loadings,errors}=useMutation(InsertData)
	


console.log(data?.kampus_merdeka.map(x=>x.nama))
console.log(loading)
  return (
    <div>
    	<h1>hello</h1>
    </div>
  )
}

export default Apollo;