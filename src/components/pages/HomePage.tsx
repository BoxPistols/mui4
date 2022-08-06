import React from 'react'
// import { CmpMuiBase } from '../../components/CmpMuiBase'
import GenericTemplate from '../templates/GenericTemplate'

const HomePage: React.FC = () => {
  return (
    <>
      {/* <div className='flex f-center'> */}
      <GenericTemplate title='トップページ'>
        <>トップページ内容</>
      </GenericTemplate>
      {/* <CmpMuiBase /> */}
      {/* </div> */}
    </>
  )
}

export default HomePage
