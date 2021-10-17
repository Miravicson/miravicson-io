import Header from '@components/Header';
import SubDuedHeader from '@components/SubDuedHeader';
import React, { ReactElement } from 'react'

interface Props {
  
}

function Error404({}: Props): ReactElement {
  return (
    <div >
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0`}>404</h1>
      </Header>
      <SubDuedHeader className={`text-2xl max-w-full mt-0`}>This is not the web page you are looking for.</SubDuedHeader>
    </div>
  );
}

export default Error404;
