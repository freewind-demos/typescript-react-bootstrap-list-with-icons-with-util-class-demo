import React, {FC, ReactNode, PropsWithChildren} from 'react';

type Props = {
  start?: React.ReactNode,
  end?: ReactNode,
}

export const ItemWithIcons: FC<PropsWithChildren<Props>> = ({start, children, end}) => {
  return <div className='d-flex p-1 align-items-center' style={{border: '1px solid red'}}>
    {start && <span className='flex-grow-0 align-middle' style={{lineHeight: 0}}>{start}</span>}
    <span className='flex-grow-1 ms-1 me-1 align-middle' style={{fontSize: 12}}>{children}</span>
    {end && <span className='flex-grow-0 align-middle' style={{lineHeight: 0}}>{end}</span>}
  </div>
}
