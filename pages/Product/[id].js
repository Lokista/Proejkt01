import React from 'react'

function index({ id }) {
  return (
    <div>
      {id}

    </div>
  )
}

export const getServerSideProps = async (context) => {
    const { id } = context.params


    return {
      props: {
        id,
      }
    }
}

export default index