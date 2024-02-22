import React from 'react'
import DocumentCard from './DocumentCard';

const Document = () => {
  return (
    <div className='flex flex-wrap gap-10 mt-4'>
      <DocumentCard/>
      <DocumentCard/>
      <DocumentCard/>
      <DocumentCard/>
      <DocumentCard/>
      <DocumentCard/>
      <DocumentCard/>
    </div>
  )
}

export default Document